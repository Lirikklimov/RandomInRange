let generateBtn = document.getElementById("generate");
let result = document.getElementById("result");

function randomNum(){
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let minValue = Number(min.value);
    let maxValue = Number(max.value);
    // console.log(minValue, maxValue);
    if(minValue > maxValue) {
        minValue = maxValue + minValue;
        maxValue = minValue - maxValue;
        minValue = minValue - maxValue;
        min.value = minValue;
        max.value = maxValue;
    }
    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    result.innerText = num
}
window.addEventListener("load", randomNum());
generateBtn.addEventListener("click", randomNum);