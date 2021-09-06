module.exports = function solveSudoku(matrix) {
  let newArr = [];
  matrix.forEach(element => {
    newArr.push(...element)
  });

  const objSudo = {

  }
  let allDone = [];
  let boxIndex = [
    [0,  1,  2,   9, 10, 11 ,18 ,19 ,20],
    [3,  4,  5,  12, 13, 14, 21, 22, 23],
    [6,  7,  8,  15, 16, 17, 24, 25, 26],
    [27, 28, 29, 36, 37, 38, 45, 46, 47],
    [30, 31, 32, 39, 40, 41, 48, 49, 50],
    [33, 34, 35, 42, 43, 44, 51, 52, 53],
    [54, 55, 56, 63, 64, 65, 72, 73, 74],
    [57, 58, 59, 66, 67, 68, 75, 76, 77],
    [60, 61, 62, 69, 70, 71, 78, 79, 80]
  ]

  
  function isResolve (value, index) {
    function rowChek (value, index) {
      let start = 0;
      let end = 8;
      if (index > 8) {
        let k = Math.floor(index/9);
        start = k * 9;
        end = start + 8;
      }
      for (let i = start; i <= end; i++) {
        if (value === newArr[i]) {
          return false;
        }
      }
      return true;
    }
  
    function colChek (value, index) {
      let start = index;
      if (index > 8) {
        start = index - Math.floor(index/9) * 9;
      }
      for (let i = start; i < newArr.length; i += 9) {
        if (value === newArr[i]) {
          return false;
        }
      }
      return true;
    }
  
  
    function minBlokCheck (value, index) {
      for (let i = 0; i < boxIndex.length; i++) {
        for (let j = 0; j < boxIndex[i].length; j++) {
          if (boxIndex[i][j] == index){
            for (let k = 0; k < boxIndex[i].length; k++) {
              if (newArr[boxIndex[i][k]] === value) {
                return false;
              }
            }
            return true;
          }
        }
      }
    }
    if (rowChek(value, index) === true && (colChek(value, index) === true && minBlokCheck(value, index) === true)) {
      return true
    }
    return false
  }
  

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === 0) {
      for (let num = 1; num <= 9; num++) {
        if (isResolve(num, j) === true) {
          if (objSudo[`${j}`] == undefined){
            objSudo[`${j}`] = [num]
          } else {
            objSudo[j].push(num)
          }
        }
      }
    }
  }
  const keys = Object.keys(objSudo);
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < objSudo[keys[i]].length; j++) {
      if (newArr[keys[i]] != 0) {
        j = objSudo[keys[i]].findIndex(element => element == newArr[keys[i]]) + 1;
        newArr[keys[i]] = 0;
      }
      while (j == objSudo[keys[i]].length){
        i = i - 1;
        j = objSudo[keys[i]].findIndex(element => element == newArr[keys[i]]) + 1
        newArr[keys[i]] = 0;
        if (i == 0 && j == objSudo[keys[i]].length) return console.log (`imposible!`)
      }

      if (isResolve(objSudo[keys[i]][j], Number(keys[i])) === true) {
        newArr[keys[i]] = objSudo[keys[i]][j]
        j = 0;
        break;
      }
    }
    if (newArr[keys[i]] === 0) {
      i = i - 2
    }
  }
  for (let i = 0; i < 9; i++) {
    allDone.push(newArr.slice(i * 9, i*9 +9))
  }
  return allDone
}
