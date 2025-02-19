let para = document.querySelector("#para");
let incBtn = document.querySelector("#increaseFont");
let decBtn = document.querySelector("#decreaseFont");


let fontSize = 16

incBtn.addEventListener("click", function() {
if (fontSize < 54) {
    fontSize += 2;
    para.style.fontSize = fontSize + "px";
}
})

decBtn.addEventListener("click", function() {
    if( fontSize > 10) {
        fontSize -= 2
        para.style.fontSize = fontSize + "px"
    }
    else {

    }
})