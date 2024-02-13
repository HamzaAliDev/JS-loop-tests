// 8. Write a ts program to find sum of all
//  odd numbers between 1 to n.
let n=parseInt(prompt("enter a number"))
let sum=0
for (i=1; i<=n; i+= 2){
    console.log(i);
    sum=sum +i
}
console.log(sum);