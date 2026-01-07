document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const validateBtn = document.getElementById("validateBtn");
    const otpInput = document.getElementById("otpInput");
    const message = document.getElementById("message");
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));

    generateBtn.addEventListener("click", () => {
        const otp = Math.floor(100000 + Math.random() * 999999);
        localStorage.setItem("otp", otp);

        message.innerHTML = 
        `<span class="alert alert-success">Generated OTP: ${otp}</span>`
    });

    validateBtn.addEventListener("click", () => {
        const enteredOtp = otpInput.value;
        const storedOtp = localStorage.getItem("otp");

        if(!storedOtp){
            message.innerHTML = 
            `<span class="alert alert-danger">No OTP Generated, please generate first</span>`
            return;
        }
        if(enteredOtp === storedOtp){
            successModal.show();
            localStorage.clear();
            message.innerHTML = "";
            otpInput.value = "";
        }else{
            message.innerHTML = 
            `<span class="text-danger">Invalid OTP</span>`
        }
    })

});