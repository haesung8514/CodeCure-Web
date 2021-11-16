const n = parseInt(prompt("Input the number of students"));

const scores = [];
for (let i = 0; i < n; i++) 
{
  const score = parseInt(prompt("Input scores"));
  scores.push(score);
}

console.log(scores);

let sum = 0;
for (let i = 0; i < n; i++) 
{
  sum += scores[i];
}


const average = sum / n;
//document.write("Average: " + average);
console.log(average);

const average_ch1 = [];
for (let i = 0; i < n; i++)
{
  average_ch = (scores[i] - average)**2;
  average_ch1.push(average_ch);
}
console.log(average_ch1);

let sum_1 = 0;
for (let i = 0; i < n; i++)
{
  sum_1 += average_ch1[i];
}
console.log(sum_1);

let averages = Math.sqrt(sum_1 /n);

document.write("Average:" + averages);

