let body_El = document.querySelector("body");
let result_Btn_El = document.querySelector("#result");
let heading_El = document.querySelector("#heading");

let userName = prompt("Ismingizni Kiriting : ");
let bmiName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()

let weight = prompt("Vaznigiz o'lchovini kiriting : ");
let height = prompt("Boyingiz o'lchamini kiriting : ");
let BMI =  weight / height  **2;

result_Btn_El.addEventListener( "click" , function () {
    if (BMI < 18.5) {
        heading_El.textContent = `${bmiName} sizning vazningiz ozg'in`
        body_El.style.backgroundColor = 'midnightblue'
        result_Btn_El.style.display = "none"
    }else if ( BMI > 18.5  && BMI < 24.9 ) {
        heading_El.textContent = `${bmiName} sizning vazningiz normal`
        body_El.style.backgroundColor = 'magenta'
        result_Btn_El.style.display = "none"
    } else if (BMI > 25  && BMI < 29.9) {
        heading_El.textContent = `${bmiName} sizning vazningiz Semiz`
        body_El.style.backgroundColor = 'red'
        result_Btn_El.style.display = "none"
    } else {
        heading_El.textContent = `${bmiName} sizning vazningiz o'ta Semiz`
        body_El.style.backgroundColor = 'blue'
        result_Btn_El.style.display = "none"
    }
})


