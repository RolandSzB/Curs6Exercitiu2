const m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumaMatrix(m1, m2) {
  let matriceSuma = [];
  for (let i = 0; i < m1.length; i++) {
    matriceSuma.push([]);
    for (let j = 0; j < m1[i].length; j++)
      matriceSuma[i].push(m1[i][j] + m2[i][j]);
  }
  return matriceSuma;
}

console.log(sumaMatrix(m1, m2));
