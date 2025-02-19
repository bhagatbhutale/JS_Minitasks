let para = document.querySelector("#para");
let btn = document.querySelector("#toggleBtn");

btn.addEventListener("click", function() {
    if( para.style.display === "none" ){
        para.style.display = "block"
    }
    else {
        para.style.display = "none"
    }
})

