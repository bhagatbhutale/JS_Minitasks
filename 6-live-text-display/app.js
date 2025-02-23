let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");

inputText.addEventListener("input", function() {
    outputText.textContent = inputText.value;
})