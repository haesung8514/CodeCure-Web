const scores1 = [ 1, 2, 3, 4, 5 ];
const scores2 = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
const scores3 = [ 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]

function getAverageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        sum / arr.length;
    }

console.log(getAverageOfArray(scores1));
console.log(getAverageOfArray(scores2));
console.log(getAverageOfArray(scores3));
