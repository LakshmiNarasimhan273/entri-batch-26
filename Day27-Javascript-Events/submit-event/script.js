document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("paymentForm");

    const username = document.getElementById("username");
    const card = document.getElementById("cardnumber");
    const cvv = document.getElementById("cvvnumber");

    const error = document.getElementById("error");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        if(username.value === "" || card.value === "" || cvv.value === "" ){
            error.innerText = "All the fields are required";
        }else{
            error.innerText = "";
            alert("Payment Successfully completed");
        }
    })
})