
let calculateBtn=document.getElementById("btn");
let weight=document.getElementById("weight");
let height=document.getElementById("height");
let result=document.getElementById("result");


calculateBtn.addEventListener("click", function(){
     let bmi= Number (weight.value/height.value*height.value);

    if(bmi <= 18.4){
        return result.innerText=`Your BMI is ${Math.round(bmi)} it means you are Under Weight`;
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return result.innerText=`Your BMI is ${Math.round(bmi)} it means you are Normal Weight`;
    }else if(bmi >= 25 && bmi <= 29.9){
        return result.innerText=`Your BMI is ${Math.round(bmi)} it means you are Over Weight`;
    }else if(bmi >= 30){
        return result.innerText=`Your BMI is ${Math.round(bmi)} it means you are Obese`;
    }else{
        return alert( "Please enter valid numbers");
    }

});


