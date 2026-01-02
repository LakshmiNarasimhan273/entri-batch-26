// Main Events
document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("message");
    const button = document.getElementById("offerbtn");

    button.addEventListener("click", function(){
        title.innerText = "Congratulations! You got 15% offer";
    })
})