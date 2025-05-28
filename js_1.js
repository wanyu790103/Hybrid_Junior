function JsTree(leafSymbol = '*', decoSymbol = 'o', height = 5) {

  for (let i = 0; i < height; i++) {
    let spaces = ' '.repeat(height - i - 1);
    let row = '';

    for (let j = 0; j <= i; j++) {
      row += leafSymbol;
      if (j !== i) {
        row += decoSymbol;
      }
    }

    console.log(spaces + row);
  }

  const trunkWidth = 3;
  const trunk = '|'.repeat(trunkWidth);
  const trunkSpaces = ' '.repeat(height - Math.floor(trunkWidth / 2) - 1);
  console.log(trunkSpaces + trunk);
}


JsTree('*', '0', 5);