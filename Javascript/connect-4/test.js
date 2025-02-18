import createChipMatrix, { numberCol, numberRow } from "./script.js";

// function testIndex() {
//   const chip = chips.get(0).items.get(0).container;
//   if (chip) {
//     chip.className += " chip-active-red";
//   }
//   const chip2 = chips.get(0).items.get(5).container;
//   if (chip2) {
//     chip2.className += " chip-active-yellow";
//   }
// }

// test();

function runTests() {
  console.log("Running tests...");

  const chips = createChipMatrix();

  // Test 1
  console.assert(chips instanceof Map, "❌ chips no es un Map");

  // Test 2
  console.assert(
    chips.size === numberCol,
    `❌ Se esperaban ${numberCol} columnas, pero hay ${chips.size}`
  );

  // Test 3
  for (let i = 0; i < numberCol; i++) {
    const column = chips.get(i);
    console.assert(
      column.items instanceof Map,
      `❌ Column ${i} no tiene un Map en 'items'`
    );
    console.assert(
      column.items.size === numberRow,
      `❌ Column ${i} tiene ${column.items.size} filas en lugar de ${numberRow}`
    );
  }

  // Test 4
  for (let i = 0; i < numberCol; i++) {
    for (let j = 0; j < numberRow; j++) {
      const chip = chips.get(i).items.get(j);
      console.assert(
        chip.container instanceof HTMLElement,
        `❌ Chip en [${i}, ${j}] no es un HTMLElement`
      );
    }
  }

  console.log("✅ Todos los tests han pasado correctamente");
}

runTests();
