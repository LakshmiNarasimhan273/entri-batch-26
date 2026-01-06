document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("paymentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const card = document.getElementById("card").value;
  const cvv = document.getElementById("cvv").value;
  const expiry = document.getElementById("expiry").value;
  const otp = document.getElementById("otp").value;

  // Regex Patterns (Clear & Simple)
  const namePattern = /^[A-Za-z ]{3,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cardPattern = /^\d{16}$/;
  const cvvPattern = /^\d{3}$/;
  const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const otpPattern = /^\d{4}$/;

  if (!namePattern.test(username)) {
    alert("Invalid Username");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Invalid Email");
    return;
  }

  if (!cardPattern.test(card)) {
    alert("Card Number must be 16 digits");
    return;
  }

  if (!cvvPattern.test(cvv)) {
    alert("CVV must be 3 digits");
    return;
  }

  if (!expiryPattern.test(expiry)) {
    alert("Expiry must be in MM/YY format");
    return;
  }

  if (!otpPattern.test(otp)) {
    alert("OTP must be 4 digits");
    return;
  }

  form.reset();
  // Successful Payment
  window.location.href = "success.html";
});
});