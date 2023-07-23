function GPA(num1 , num2 , num3 , num4 , num5){
    return (num1 + num2 + num3 + num4 + num5)/5
}
const mark = +prompt("How many marks is the exam ?")
const num1 = +prompt("Enter first mark :");
if(0<=num1 && num1<=mark){
    const num2 = +prompt("Enter second mark :");
        if(0<=num2 && num2<=mark){
            const num3 = +prompt("Enter third mark :");
        if(0<=num3 && num3<=mark){
            const num4 = +prompt("Enter fourth mark :");
            if(0<=num4 && num4<=mark){
                const num5 = +prompt("Enter fifth mark :");
                console.log(GPA(num1 , num2 , num3 , num4 , num5))
            }
        }
    }

}
