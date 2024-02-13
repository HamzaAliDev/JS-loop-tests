// 14. Write a ts program to calculate sum of digits of a number.
let num=String(prompt("Enter the number:"));
let sum=0
for (let i = 0; i < num.length; i++) {
    let digit=parseInt(num.charAt(i))
    sum=sum + digit
    
}
console.log(sum);