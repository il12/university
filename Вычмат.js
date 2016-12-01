function gauss_Stand(a) {
    const n = a.length;
//    console.log(n);
    let x = [];
    let sum = 0;
    // TODO: Найти и исправить ошибку в приведении матрицы к треугольному виду
    //Приведение матрицы к треугольному виду
    for (let i = 0; i < n; i++) {
        let tmp = a[i][i];
        for (let j = 0; j <= n; j++) {
            a[i][j] = a[i][j]/tmp;
        }
        for (let k = i + 1; k < n; k++) {
            for (let j = 0; j < n + 1; j++) {
                a[k][j] = a[k][j] - a[i][j] * a[k][i];
            }
            a[k][i] = 0;
        }
        console.log(a);
    }
    //Обратный ход
    x[n - 1] = Math.round(a[n - 1][n] / a[n - 1][n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        let sum=0;
        for (let j = i + 1; j < n; j++) {
            sum += a[i][j] * x[j];
        }
        x[i] = Math.round((a[i][n] - sum));
    }
    return x;
}

let a1 = [[5,7,6,5,23],[7,10,8,7,32],[6,8,10,9,33],[5,7,9,10,31]];
//let a2 = [[2,1,0,3,4],[1,1,-2,0,0],[3,0,1,-1,2],[2,0,1,1,3]];
//let a3 = [[1,1,0],[3,2,1],[2,3,1]];
console.log("result1=",gauss_Stand(a1));
//console.log("result2=",gauss_Stand(a2,4));
//console.log("result3=",gauss_Stand(a3));