module.exports = function solveSudoku(matrix) {
    let str = matrix;
    rewriteZeros();
    function rewriteZeros() {
        for (let x = 0; x < str.length; x++) {
            for (let y = 0; y < str.length; y++) {
                if (str[x][y] === 0) {
                    str[x][y] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    searchNumbers(x, y);
                }
            }
        }
    }

    function searchNumbers(x, y) {
        for(let i = 0; i < str.length; i++){
            for(let j = 0; j < str.length; j++){
                if (typeof(str[x][i]) === "number" && str[x][i] === str[x][y][j]){
                    str[x][y].splice(j, 1);
                }
                for(let k = 0; k < str[x][y].length; k++){
                    if (typeof(str[x][i]) === "object" && str[x][i][j] === str[x][y][k] && y !== i){
                    }
                }
            }
        }
        for(let i = 0; i < str.length; i++){
            for(let j = 0; j < str.length; j++){
                if (typeof(str[i][y]) === "number" && str[i][y] === str[x][y][j]){
                    str[x][y].splice(j, 1);
                }
            }
        }

        let a , b = 0;
        a = (x < 3)? a = 0 : (x < 6)? a = 3 : a = 6;
        b = (y < 3)? b = 0 : (y < 6)? b = 3 : b = 6;

        for (let i = a, lena = a + 3; i < lena; i++) {
            for (let k = b, lenb = b + 3; k < lenb; k++) {
                for (let p = 0, lenp = str[x][y].length; p < str; p++) {
                    if (typeof(str[i][k]) === "number" && str[i][k] === str[x][y][p]) {
                        str[x][y].splice(p, 1);
                    }
                }
            }
        }
        if(str[x][y].length === 1) {
            str[x][y] = str[x][y][0];
        }
    }
    return str;
};
