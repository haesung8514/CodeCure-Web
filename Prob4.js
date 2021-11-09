const input1 = parseInt(prompt("1st person : "));
const input2 = parseInt(prompt("2nd person : "));
const input3 = parseInt(prompt("3th person : "));
const score = new Array();
score[0] = input1;
score[1] = input2;
score[2] = input3;
const avg = (score[0] + score[1] + score[2]) / 3
document.write("<br />"+ input1 + " + " + input2 + " + " + input3);
document.write("<br/>Average : " + avg);
console.log(avg);