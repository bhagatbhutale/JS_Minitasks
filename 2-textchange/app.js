let btn = document.querySelector("#btn");
let para = document.querySelector("#para");

btn.addEventListener("click", changeTest);

let buttonCount = 0;

function changeTest() {
    buttonCount++
    para.innerHTML = `Button is Pressed ' ${buttonCount} ' Times`
   
}