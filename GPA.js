function average(num1 , num2 , num3 , num4 , num5){
    const avg = (num1 + num2 + num3 + num4 + num5)/5;
    if (avg < 12){
        return avg + " => mashroot"
    }else {
       return  avg + " => ghabol"
    }
}
const num1 = +prompt("Enter first mark :");
if(0<=num1 && num1<=20){
    const num2 = +prompt("Enter second mark :");
        if(0<=num2 && num2<=20){
            const num3 = +prompt("Enter third mark :");
        if(0<=num3 && num3<=20){
            const num4 = +prompt("Enter fourth mark :");
            if(0<=num4 && num4<=20){
                const num5 = +prompt("Enter fifth mark :");
                console.log(average(num1 , num2 , num3 , num4 , num5))
            }
        }
    }

}
