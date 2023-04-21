const m1 = [
  [{ value: 1 }, { value: 2 }, { value: 3 }],
  [{ value: 4 }, { value: 5 }, { value: 6 }],
  [{ value: 7 }, { value: 8 }, { value: 9 }],
];

const m2 = [
  [{ value: 9 }, { value: 8 }, { value: 7 }],
  [{ value: 6 }, { value: 5 }, { value: 4 }],
  [{ value: 3 }, { value: 2 }, { value: 1 }],
];

//facem matrixul dinamic
function creareMatrix(linii, coloane) {
  let mat = [];
  for (let i = 0; i < linii; i++) {
    mat.push([]);
    for (let j = 0; j < coloane; j++) {
      mat[i].push({
        value: Math.floor(Math.random() * 9) + 1,
        color:
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")",
      });
    }
  }
  console.log(mat);
  return mat;
}

function sumMatrixObj(m1, m2) {
  let ms = []; //ms=matrix-suma
  for (let i = 0; i < m1.length; i++) {
    ms.push([]);
    for (let j = 0; j < m1[i].length; j++)
      ms[i].push({
        value: m1[i][j].value + m2[i][j].value,
        color: "red",
      });
  }
  return ms;
}
console.log(sumMatrixObj(m1, m2));
console.log(creareMatrix(3, 3), creareMatrix(3, 3));
