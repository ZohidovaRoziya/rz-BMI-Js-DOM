let name_bmi_El = document.getElementById("name_bmi");
let bmi_form_El = document.getElementById("bmi_form")
let weight_bmi_El = document.getElementById("weight_bmi");
let height_bmi_El = document.getElementById("height_bmi");
let card_heading_El = document.getElementById("card_heading")


bmi_form.addEventListener( "submit", (e)=> {
    e.preventDefault()
    let name = name_bmi_El.value;
    let bmiName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let weight = weight_bmi_El.value;
    let height = height_bmi_El.value;
    let BMI =  (weight / height  **2).toFixed(1);
    
    if (BMI <= 18.5) {
        card_heading_El.textContent = `${bmiName} siz o'zg'insiz !`
    } else if (BMI > 18.5  && BMI < 24.9 ) {
        card_heading_El.textContent = `${bmiName} siz normanlisiz!`
    } else if (BMI > 25  && BMI < 29.9) {
        card_heading_El.textContent = `${bmiName} siz semizsiz!`
    } else {
        card_heading_El.textContent = `${bmiName} siz o'ta semisz!`
    }
})






















