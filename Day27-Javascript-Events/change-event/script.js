document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("passwordInput");
    const checkbox = document.getElementById("showPassword");

    checkbox.addEventListener("change", () => {
        if(checkbox.checked){
            password.type = "text";
        } else {
            password.type = "password";
        }
    })
})