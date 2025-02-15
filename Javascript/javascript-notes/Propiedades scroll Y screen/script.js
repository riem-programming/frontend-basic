// es un objeto el cual tiene diferentes datos respecto a la pantalla
const screen = window.screen;
// console.log(screen);


// nos indica que tantos pixeles se mueve la ventana de su posicion original, top indica que tan abajo se encuentra la ventana y left que tanto a la derecha
const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
//alert(`Left: ${screenLeft} Right: ${screenTop}`);



// nos indica que tantos pixeles nos encontramos de la posicion original para abajo  o la derecha del scroll
const scrollX = window.scrollX;
const scrollY = window.scrollY;
alert(`Scroll ejeX: ${scrollX} ejeY: ${scrollY}`);

// redirije el scroll a la posicion x = 2000, y = 0, pero como es absoluto solo funca en la consola de la pagina /este comando
// window.scroll(1000,0);