module.exports = function solveSudoku(matrix) {
  var nonPossibilities = {},impossibleNumbers, emptySpaces = 81; 
  while (emptySpaces >0) {
    for (var vert = 0; vert < matrix.length; vert ++) { 
      for (var horz = 0; horz < matrix.length; horz++) { 
        if (matrix[vert] [horz] === 0) { 
          nonPossibilities = {};
          for (var i = 0; i < 9; i++) { 
            if (matrix[vert] [i] > 0) {
              nonPossibilities [matrix [vert] [i] ] = true 
            } 
            if (matrix[i][horz] > 0) { nonPossibilities[matrix[i][horz]] = true 
            }
          }
          for (var vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert/3)* 3 + 3; vertBox++){
            for (var horzBox = Math.floor(horz/3) * 3; horzBox < Math.floor(horz/3)* 3 + 3; horzBox++){
              if (matrix[vertBox][horzBox]){
                nonPossibilities [matrix[vertBox] [horzBox]] = true;
              }
            }
          }
          impossibleNumbers = Object.keys(nonPossibilities); 
          if (impossibleNumbers.length = 8) {
            for (var i = 1; i < 10; i++) {
              if (impossibleNumbers.indexOf(i.toString()) < 0) { 
                matrix[vert][horz] = i;
              }
            }
          }
        }
      }
    }
  }
  return matrix;
}
