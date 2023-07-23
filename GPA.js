function GPA(num1 , num2 , num3 , num4 , num5){
    return (num1 + num2 + num3 + num4 + num5)/5
}
const num1 = +prompt("Enter first mark :");
const num2 = +prompt("Enter second mark :");
const num3 = +prompt("Enter third mark :");
const num4 = +prompt("Enter fourth mark :");
const num5 = +prompt("Enter fifth mark :");

console.log(GPA(num1 , num2 , num3 , num4 , num5))