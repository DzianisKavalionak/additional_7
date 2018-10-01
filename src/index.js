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
    var abc = 0;
    function superSudoku() {
        if (abc < 10000) {
            abc++;
            for (let x = 0; x < str.length; x++) {
                for (let y = 0; y < str.length; y++) {
                    if (typeof(str[x][y]) === "object") {
                        searchNumbers(x, y);
                    }
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
        if (x < 3 && y < 3) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 6 && y < 3 && x > 3) {
            for (let i = 3; i < 6; i++) {
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 9 && y < 3 && x > 6) {
            for (let i = 6; i < 9; i++) {
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 3 && y < 6 && y > 3) {
            for (let i = 0; i < 3; i++) {
                for (let j = 3; j < 6; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 3 && y < 9 && y > 6) {
            for (let i = 0; i < 3; i++) {
                for (let j = 6; j < 9; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 6 && y < 6 && y > 3 && x > 3) {
            for (let i = 3; i < 6; i++) {
                for (let j = 3; j < 6; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 9 && y < 6 && y > 3 && x > 6) {
            for (let i = 6; i < 9; i++) {
                for (let j = 3; j < 6; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 6 && y < 9 && y > 6 && x > 3) {
            for (let i = 3; i < 6; i++) {
                for (let j = 6; j < 9; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }
        else
        if (x < 9 && y < 9 && y > 6 && x > 6) {
            for (let i = 6; i < 9; i++) {
                for (let j = 6; j < 9; j++) {
                    for (let k = 0; k < str.length; k++) {
                        if (typeof(str[i][j]) === "number" && str[i][j] === str[x][y][k]) {
                            str[x][y].splice(k, 1);
                        }
                    }
                }
            }
        }




        if(str[x][y].length === 1) {
            str[x][y] = str[x][y][0];
        }
        superSudoku();
    }
    return str;
}
