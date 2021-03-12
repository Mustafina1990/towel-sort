
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newAr = [];
  if(matrix === undefined) {
    return newAr;
  }
  let arr = matrix.map((item, index) =>
    index % 2 === 0 ? item : item.reverse());
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newAr.push(arr[i][j]);
    }
  }
  return newAr;
}