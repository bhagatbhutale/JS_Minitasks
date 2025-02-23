
function validateEmail() {
    let emailMsg = document.getElementById("email").value
    let errorMsg = document.getElementById("error");
    
   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if(emailPattern.test(emailMsg)) {
    errorMsg.textContent = "Valid Email !"
    errorMsg.style.color = "green"
   }
   else {
    errorMsg.textContent = "Invalid Email !"
    errorMsg.style.color = "red"
   } 
}