const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumaMatrix(matrix1, matrix2) {
  let matriceSuma = [];
  for (let i = 0; i < matrix1.length; i++) {
    matriceSuma.push([]);
    for (let j = 0; j < matrix1[i].length; j++)
      matriceSuma[i].push(matrix1[i][j] + matrix2[i][j]);
  }
  return matriceSuma;
}

console.log(sumaMatrix(matrix1, matrix2));
