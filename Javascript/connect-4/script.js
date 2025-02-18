/* By Mouredev
    Crea el juego conecta cuatro.
    Requisitos:
    - Tablero de 7x6 (7 en el eje "x" y 6 en el "y").
    - Fichas Rojas y Amarillas. La primera partida la comienza siempre la Roja (la segunda la Amarilla, la tercera la Roja...).
    - No hay que implementar una funcionalidad que te permita jugar contra la App. Se asume que jugarán dos personas reales alternándose.
    - Al seleccionar la columna se coloca la ficha en la parte inferior.
    - Guardar el número partidas ganadas de cada equipo mientras la App no se finaliza.
    - Dos botones para reiniciar la partida en marcha y para resetear el contador de victorias y derrotas.
    - Puedes añadirle todas las funcionalidades extra que consideres.
*/

export const numberRow = 6;
export const numberCol = 7;
const stepsForWin = 4;

/**
 * @typedef {object} ChipItem
 * @property {HTMLElement} container - The chip's HTML element.
 * @property {boolean} isEmpty - Indicates if the chip is empty.
 */

/**
 * @typedef {object} ChipColumn
 * @property {HTMLElement} container - The container for the column of chips.
 * @property {Map<number, ChipItem>>} items - A map of chip items indexed by row.
 */

/** @type {Map<number, ChipColumn >} */
const chips = createChipMatrix();

const clickSongContainer = document.getElementById("songClick");
const winSongContainer = document.getElementById("songGameOver");
const notificationSongContainer = document.getElementById("songNotification");
const startSongContainer = document.getElementById("songGameStart");
const drawSongContainer = document.getElementById("songGameDraw")
let isTurnRed = true;
const modal = document.getElementById("myDialog")
const nameWinner = document.getElementById("nameWinner")

// chips.get(0).items.get(5).isEmpty = false
// console.log(chips)

/**
 * Creates a matrix of chips using a Map.
 * @returns {Map<number, ChipColumn>} The matrix of chips.
 */
export default function createChipMatrix() {
  const queuesChip = new Map();
  let index = 0;
  for (let i = 0; i < numberCol; i++) {
    const colChipContainer = document.getElementById(`col-${i + 1}`);
    let colChipItems = new Map();
    for (let j = 0; j < numberRow; j++) {
      index++;
      const chipItem = document.getElementById(index);
      colChipItems.set(j, { container: chipItem, isEmpty: true });
    }
    queuesChip.set(i, { container: colChipContainer, items: colChipItems });
  }
  return queuesChip;
}

function onMouseEnterInQueuesContainer(event) {
  const index = event.target.id[4]; // mejorable
  const item = findItemEmpty(index - 1);
  if (item) {
    item.container.className += ` ${calculateColorHoverPlayerTurn()}`;
  }
}

function onLeaveInQueuesContianer(event) {
  const index = event.target.id[4]; // mejorable
  const item = findItemEmpty(index - 1);
  if (item) {
    item.container.classList.remove(calculateColorHoverPlayerTurn());
  }
}

function findItemEmpty(id) {
  const items = Array.from(chips.get(id).items.values()).reverse();
  return items.find((item) => item.isEmpty === true);
}

function onClickInQueuesContainer(event, id) {
  const index = Number(event.currentTarget.id[4]) - 1; // mejorable
  // console.log("My index reverse: ",event.currentTarget)
  const item = findItemEmpty(index);
  if (item) {
    item.container.className += ` ${calculateColorPlayerTurn()}`;
    item.container.classList.remove(calculateColorHoverPlayerTurn());
    const indexAdapted = item.container.id - 1 - 6 * index;

    // audio
    clickSongContainer.currentTime = 0;
    clickSongContainer.play();
    isTurnRed ? boardPlayerRed[id][indexAdapted] = true : boardPlayerYellow[id][indexAdapted] = true;

    // cambiar a false
    chips.get(id).items.get(indexAdapted).isEmpty = false;

    const {isWinner, itemsWinner} = actionIfPlayerWin(isTurnRed, indexAdapted, id)
    if(isWinner) {
      stopGame()
      modal.showModal()
      winSongContainer.currentTime = 0;
      winSongContainer.play();
      // bodyContent.classList.remove("box-shadow-red", "box-shadow-yellow")
      if(isTurnRed) {
        scoreWinsRed++;
        scoreRedContainer.innerHTML = scoreWinsRed;
        itemsWinner.forEach(item => item.classList.add("chip-win"))
        
        nameWinner.innerHTML = 'Player: RED WIN!!!'
        document.querySelector(".dialog-container").style.backgroundColor = '#b25068'
        document.querySelector(".dialog-container").style.color = 'white'
      } else {
        scoreWinsYellow++;
        scoreYellowContainer.innerHTML = scoreWinsYellow;
        itemsWinner.forEach(item => item.classList.add("chip-win"))
        
        nameWinner.innerHTML = 'Player: YELLOW WIN!!!'
        document.querySelector(".dialog-container").style.backgroundColor = '#e7ab79'
        document.querySelector(".dialog-container").style.color = 'black'
      }
      return
    }

    if(isDraw()) {
      stopGame()
      nameWinner.innerHTML = 'DRAW!!!'
      // bodyContent.classList.remove("box-shadow-red", "box-shadow-yellow")
      drawSongContainer.currentTime = 0
      drawSongContainer.play()
      document.querySelector(".dialog-container").style.backgroundColor = '#774360'
      document.querySelector(".dialog-container").style.color = 'white'
      modal.showModal()
      // console.log("EMPATE PAAAAAA")
      return
    }

    calculateNewPlayerTurn();

    // falta testear
    if (Number(item.container.id) - 1 === 6 * index) {

      const handler = eventHandlers.get(index);
      const containerChipCol = document.getElementById(`col-${id + 1}`);
      containerChipCol.removeEventListener(
        "mouseenter",
        onMouseEnterInQueuesContainer,
        false
      );
      containerChipCol.removeEventListener(
        "mouseleave",
        onLeaveInQueuesContianer,
        false
      );
      containerChipCol.removeEventListener(
        "click",
        handler,
        false
      );
      containerChipCol.className += " no-hover";
      containerChipCol.style.cursor = "auto";
    } else {
      updateHoverDisplay(event.currentTarget);
    }
  }
}

function updateHoverDisplay(container) {
  const colIndex = Number(container.id[4]) - 1;
  const nextEmptyItem = findItemEmpty(colIndex);
  if (nextEmptyItem) {
    nextEmptyItem.container.className += ` ${calculateColorHoverPlayerTurn()}`;
  }
}

const originalBoard = document.querySelector(".content").cloneNode(true);
const buttonStart = document.getElementById("button-start");
const scoreRedContainer = document.getElementById("score-red");
const scoreYellowContainer = document.getElementById("score-yellow");
let scoreWinsRed = 0;
let scoreWinsYellow = 0;
let boardPlayerRed = Array.from({ length: numberCol }, () => Array(numberRow).fill(false))
let boardPlayerYellow = Array.from({ length: numberCol }, () => Array(numberRow).fill(false))

buttonStart.addEventListener("click", onClickStartGame);

function calculateColorPlayerTurn() {
  if (isTurnRed) {
    return "chip-active-red";
  }
  return "chip-active-yellow";
}

function calculateColorHoverPlayerTurn() {
  if (isTurnRed) {
    return "chip-active-red-hover";
  }
  return "chip-active-yellow-hover";
}

function calculateNewPlayerTurn() {
  isTurnRed = !isTurnRed;
  // if(isTurnRed){
  //   bodyContent.classList.remove("box-shadow-yellow")
  //   bodyContent.classList.add("box-shadow-red")
  // } else {
  //   bodyContent.classList.remove("box-shadow-red")
  //   bodyContent.classList.add("box-shadow-yellow")
  // }
}

const eventHandlers = new Map();

function startGame() {
  for (let index = 0; index < numberCol; index++) {
    // funcion para almacenar mi funcion anonima
    const handler = (event) => onClickInQueuesContainer(event, index);
    eventHandlers.set(index, handler);

    document
      .getElementById(`col-${index + 1}`)
      .addEventListener("mouseenter", onMouseEnterInQueuesContainer, false);
    document
      .getElementById(`col-${index + 1}`)
      .addEventListener("mouseleave", onLeaveInQueuesContianer, false);
    document
      .getElementById(`col-${index + 1}`)
      .addEventListener("click", handler, false);
  }
}

function stopGame() {
  for (let index = 0; index < numberCol; index++) {
    const column = document.getElementById(`col-${index + 1}`);

    if (column) {
      // detectar funcion anonima para eliminar el listener
      const handler = eventHandlers.get(index);

      column.removeEventListener(
        "mouseenter",
        onMouseEnterInQueuesContainer,
        false
      );
      column.removeEventListener("mouseleave", onLeaveInQueuesContianer, false);
      column.removeEventListener("click", handler, false);
    }

    // chips.get(index).items.forEach(item => {
    //   if (item.container.classList.contains("chip-active-red-hover")) {
    //     item.container.classList.remove("chip-active-red-hover");
    //     console.log("Removimos")
    //   }
    //   if (item.container.classList.contains("chip-active-yellow-hover")) {
    //     item.container.classList.remove("chip-active-yellow-hover");
    //     console.log("Removimos")
    //   }
    // });
    

  }
}

function updateStyleButton() {
  buttonStart.innerHTML = "Reset Game";
  buttonStart.classList.add("resetButton");
  buttonStart.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = isTurnRed ? "#B25068" : "#E7AB79";
    event.target.style.color = isTurnRed ? "white" : "black";
  });
  buttonStart.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "transparent";
    event.target.style.color = "white";
  });
}

// const bodyContent = document.getElementById("body")

function onClickStartGame(_event) {
  startSongContainer.currentTime = 0;
  startSongContainer.play();
  startGame();
  updateStyleButton();
  // bodyContent.classList.add("box-shadow-red")
  buttonStart.removeEventListener("click", onClickStartGame);
  buttonStart.addEventListener("click", onClickResetGame);
}

function onClickResetGame(_event) {
  // stopGame(); it's not necesary
  startSongContainer.currentTime = 0;
  startSongContainer.play();

  // scoreWinsRed = 0;
  // scoreWinsYellow = 0;
  // scoreRedContainer.innerHTML = scoreWinsRed;
  // scoreYellowContainer.innerHTML = scoreWinsYellow;
  isTurnRed = true;
  // bodyContent.classList.add("box-shadow-red")
  boardPlayerRed = Array.from({ length: numberCol }, () => Array(numberRow).fill(false))
  boardPlayerYellow = Array.from({ length: numberCol }, () => Array(numberRow).fill(false))

  const boardContent = document.querySelector(".content");
  boardContent.replaceWith(originalBoard.cloneNode(true));

  resetChipMatrix();
  startGame();
}

function resetChipMatrix() {
  chips.clear();
  const newChips = createChipMatrix();

  for (let [key, value] of newChips) {
    chips.set(key, value);
  }
}

document.getElementById("test-stop").addEventListener("click", (_event) => {
  stopGame();
});

document.getElementById("test-start").addEventListener("click", (_event) => {
  startGame();
});


/* 
  1) Verificar columnas
    -Avanzando 3 posiciones y 0 para atras, 
    -Avanzando 2 posiciones y 1 para atras, 
    -Avanzando 1 posicion y 2 para atras
    -Avanzando 0 y 3 para atras
  2) Verificar filas => lo mismo
  3) Verificar intersecciones
*/

function canMoveWithinBounds(position, limit, steps ,isForward) {
  // console.log(position, steps)
  if(isForward) {
    return !(position + steps >= limit)
  } else {
    return !(position - steps < 0)
  }
}

function checkBoardItemsByPlayer(indexRow, indexCol, boardPlayer) {
  for (let index = 0; index < stepsForWin; index++) {
    const secondIndex = stepsForWin - 1 - index
    const checkColAbove = canMoveWithinBounds(indexRow, numberRow, index, false)
    const checkColBelow = canMoveWithinBounds(indexRow, numberRow, secondIndex, true)
    const checkRowRight = canMoveWithinBounds(indexCol, numberCol, index, true) 
    const checkRowLeft = canMoveWithinBounds(indexCol, numberCol, secondIndex, false)
    const checkCol = checkColAbove && checkColBelow
    const checkRow = checkRowRight && checkRowLeft
    const checkDiagonalRight = checkCol && checkRow
    const checkRowRightV2 = canMoveWithinBounds(indexCol, numberCol, secondIndex, true) 
    const checkRowLeftV2 = canMoveWithinBounds(indexCol, numberCol, index, false)
    const checkDiagonalLeft = checkCol && checkRowRightV2 && checkRowLeftV2

    if( checkCol )  {
      const existingWinner = checkAllSameColorRowOrColumn(indexRow - index, indexRow + secondIndex, { rowIndex: indexRow, colIndex: indexCol }, boardPlayer , false)
      if( existingWinner ) {

        return { isWinner: true, itemsWinner: findItemsInInterval(indexRow - index, indexRow + secondIndex, { rowIndex: indexRow, colIndex: indexCol } , false) }
      }
    }
    if( checkRow )  {
      const existingWinner = checkAllSameColorRowOrColumn(indexCol - secondIndex, indexCol + index, { rowIndex: indexRow, colIndex: indexCol }, boardPlayer , true)

      if( existingWinner ) {
        return { isWinner: true, itemsWinner: findItemsInInterval(indexCol - secondIndex, indexCol + index, { rowIndex: indexRow, colIndex: indexCol }, true) }
      }
    }

    if ( checkDiagonalRight ) {
      // console.log('DIAGONAL DERECHA')
      // console.log(`Es posible moverse diagonal arriba/derecha ${index} y abajo/izquierda ${secondIndex}`)
      // console.log(`[${indexCol - secondIndex},${indexRow + secondIndex}] - [${indexCol + index},${indexRow - index}]`)
      const existingWinner =  checkAllSameColorDiagonal({col: indexCol - secondIndex, row: indexRow + secondIndex}, { col: indexCol + index, row: indexRow - index }, boardPlayer, true)
      

      if( existingWinner ) {
        return { isWinner: true, itemsWinner: findItemsInIntervalDiagonal({col: indexCol - secondIndex, row: indexRow + secondIndex}, { col: indexCol + index, row: indexRow - index }, true) }
      }

    }

    if ( checkDiagonalLeft ) {
      // console.log('DIAGONAL IZQUIERDA')
      // console.log(`Es posible moverse diagonal arriba/izquierda ${index} y abajo/derecha ${secondIndex}`)
      // console.log(`[${indexCol - index},${indexRow - index}] - [${indexCol + secondIndex},${indexRow + secondIndex}]`)
      
      const existingWinner = checkAllSameColorDiagonal({col: indexCol - index, row: indexRow - index}, {col: indexCol + secondIndex, row: indexRow + secondIndex}, boardPlayer, false)  

      if( existingWinner ) {
        return { isWinner: true, itemsWinner: findItemsInIntervalDiagonal({col: indexCol - index, row: indexRow - index}, {col: indexCol + secondIndex, row: indexRow + secondIndex}, false) }
      }
    }
  }
  return { isWinner: false, itemsWinner: null }
}

function actionIfPlayerWin(isTurnRed, indexRow, indexCol) {
  if(isTurnRed) {
    const {isWinner, itemsWinner} = checkBoardItemsByPlayer(indexRow, indexCol, boardPlayerRed)
    if(isWinner) {
      return { isWinner: isWinner, itemsWinner: itemsWinner }
    }
  } else {
    const {isWinner, itemsWinner} = checkBoardItemsByPlayer(indexRow, indexCol, boardPlayerYellow)
    if(isWinner) {
      return { isWinner: isWinner, itemsWinner: itemsWinner }
    }
  }
  return { isWinner: false, itemsWinner: [] }
}

function findItemsInInterval(startIndex, endIndex, position, isRow) {
  let count = startIndex
  let items = []
  
  if(isRow) {
    while(count <= endIndex) {
      const item = chips.get(count).items.get(position.rowIndex).container
      items.push(item)
      count++;
    }
  } else {
    while(count <= endIndex) {
      const item = chips.get(position.colIndex).items.get(count).container
      items.push(item)
      count++;
    }
  }
  return items
}

function checkAllSameColorRowOrColumn(startIndex, endIndex, position, boardPlayer ,isRow) {
  let count = startIndex
  let isWin = true
  
  if(isRow){ 
    while(count <= endIndex) {
      const item = boardPlayer[count][position.rowIndex]
      if(!item) {
        isWin = false
        break;
      }
      count++
    }
  } else {
    // console.log(' IndexRowStart: ', startIndex, ' IndexRowEnd: ', endIndex)
    while(count <= endIndex) {
      const item = boardPlayer[position.colIndex][count];
      // console.log(chips.get(position.colIndex).items.get(count));
      if(!item) {
        isWin = false
        break;
      }
      count++;
    }
  }
  return isWin
}

function checkAllSameColorDiagonal(startIndex, endIndex, boardPlayer, isRight) {
  let count = { row: startIndex.row , col: startIndex.col }
  let isWin = true

  if(isRight) {

    // console.log('row: ',count.row, 'col: ', count.col)
    // console.log('rowEnd: ', endIndex.row, 'colEnd: ', endIndex.col)

    while (count.row >= endIndex.row && count.col <= endIndex.col) {
      const item = boardPlayer[count.col][count.row]
      
      if(!item) {
        isWin = false;
        break;
      }
      count.row--;
      count.col++;
    }
  } else {

    // console.log('row: ',count.row, 'col: ', count.col)
    // console.log('rowEnd: ', endIndex.row, 'colEnd: ', endIndex.col)
    while (count.row <= endIndex.row && count.col <= endIndex.col) {
      const item = boardPlayer[count.col][count.row]
      if(!item) {
        isWin = false;
        break;
      }
      count.row++;
      count.col++;
    }
  }
  return isWin
}

function findItemsInIntervalDiagonal(startIndex, endIndex, isRight) {
  let count = { row: startIndex.row , col: startIndex.col }
  let items = []
  
  if(isRight) {
    while(count.row >= endIndex.row && count.col <= endIndex.col) {
      const item = chips.get(count.col).items.get(count.row).container
      items.push(item)
      count.row--;
      count.col++;
    }
  } else {
    while(count.row <= endIndex.row && count.col <= endIndex.col) {
      const item = chips.get(count.col).items.get(count.row).container
      items.push(item)
      count.row++;
      count.col++;
    }
  }
  return items
}

function isDraw() {
  return [...chips.values()].every(col => 
    [...col.items.values()].every(item => !item.isEmpty)
  );
}

document.getElementById("closeDialog-svg").addEventListener("click",(_event) => {
  notificationSongContainer.currentTime = 0
  notificationSongContainer.play()
  modal.close()
})
document.getElementById("confirm-button").addEventListener("click",(event) => {
  modal.close()
  onClickResetGame(event)
})
document.getElementById("close-button").addEventListener("click",(_event) => {
  notificationSongContainer.currentTime = 0
  notificationSongContainer.play()
  modal.close()
})

document.querySelector(".button_reset_score").addEventListener("click",(_event) => {
  notificationSongContainer.currentTime = 0
  notificationSongContainer.play()
  scoreWinsRed = 0
  scoreWinsYellow = 0
  scoreRedContainer.innerHTML = scoreWinsRed
  scoreYellowContainer.innerHTML = scoreWinsYellow
})