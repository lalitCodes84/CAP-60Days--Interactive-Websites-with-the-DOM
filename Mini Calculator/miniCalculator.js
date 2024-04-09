function calculate(){

    // input tags selected here
    let firstNumber=document.getElementById("firstNumber");
    let secondNumber=document.getElementById("secondNumber");

    // buttons selected here 
    let optBtn =document.getElementsByTagName("button");

    for(let i=0; i<optBtn.length; i++){
        optBtn[i].addEventListener("click" ,function(){
            switch(optBtn[i].innerText){
                case "Add":
                    return alert(`Result: ${Number (firstNumber.value)+Number (secondNumber.value)}`);
                    break;
                case "Subtract":
                    return alert(`Result:${Number (firstNumber.value)- Number (secondNumber.value)}`); 
                    break;
                case "Multiply":
                        return alert(`Result:${Number (firstNumber.value)* Number (secondNumber.value)}`);
                        break;
                case "Divide":
                        return alert(`Result:${ Number (firstNumber.value)/Number (secondNumber.value)}`);   
                        break;
                        default:
                            return alert("Invalid Input");
            }
        })
    }
}
calculate();

