document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("paymentForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // const error = document.getElementById("username-error");

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const card = document.getElementById("cardnumber").value;
        const cvv = document.getElementById("cvv").value;
        const expiry = document.getElementById("expiry").value;
        const otp = document.getElementById("otp").value;

        // RegEx Patterns
        // Lakshmi Narasimhan
        const namePattern = /^[A-Za-z ]{3,}$/;
        // narasimhan.123@mail.com
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-z]{2,}$/;
        const cardPattern = /^\d{16}$/;
        const cvvPattern = /^\d{3}$/;
        // MM/YY - 12/
        const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const otpPattern = /^\d{4}$/;

        // if(!namePattern.test(username)){
        //     error.textContent = "Invalid Username";
        //     return;
        // }else{
        //     error.textContent = ""
        // }

        if(!namePattern.test(username)){
            alert("Invalid username");
            return;
        }

        if(!emailPattern.test(email)){
            alert("Invalid Email");
            return;
        }

        if(!cardPattern.test(card)){
            alert("Card number must be 16 digits");
            return;
        }

        if(!cvvPattern.test(cvv)){
            alert("CVV must be 3 digits");
            return;
        }
        if(!expiryPattern.test(expiry)){
            alert("Expiry must be in MM/YY format");
            return;
        }
        if(!otpPattern.test(otp)){
            alert("OTP must be 4 digits");
            return;
        }
        form.reset();
        // submission
        window.location.href = "success.html";
    })

})