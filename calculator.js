function sum(a = 0 , b = 0 , o){
    if (!isNaN(a + b)){ 
        switch(o){
            case '+' : return(a + b);
            case '-' : return(a - b);
            case '*' : return(a * b);
            case '/' : return(a / b);
            default : return("the operator is wrong!");
        }
    }
        return "somthing wrong!"
}
const leftNumber = +prompt("Enter first number :")
const operator = prompt(" operator?");
const rightNumber = +prompt("Enter second number :")

console.log(sum(leftNumber , rightNumber , operator))