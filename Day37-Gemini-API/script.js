document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "AIzaSyCyC7KCo3NV5M2sfEOWH1OdV6hsLzEK38M";

    const button = document.getElementById("askGemini");

    button.addEventListener("click", async () => {
        const input = document.getElementById("userInput").value.trim();
        const resultDiv = document.getElementById("result");

        if(!input){
            resultDiv.innerHTML = 
            `
            <div class="alert alert-info text-center fw-bold">Please Enter Some Topic</div>
            `
            return;
        }

        // Prompt
        const prompt = 
        `
        Provide a comprehensive explanation of "${input}".
        Inlucde:
        - Clear definition
        - Background context
        - Key facts or examples
        - Give Some Web References link
        - Why it matters or where it's used

        Write at least 100 words.
        `;

        resultDiv.innerHTML = 
        `
        <div class="d-flex justify-content-center">
                <div class="spinner-border text-success" role="status"></div>
        </div>
        `;

        try{

            // Gemini API Calls
            const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {role: "user", parts: [{text: prompt}]}
                    ]
                })
            });

            const data = await response.json();

            // candidates[
                // content: {
                    // parts: [
                        // {
                            // text: {}
                        // }
                    // ]
                // }
            // ]

            const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            resultDiv.innerText = output;

        }catch(err){
            resultDiv.innerText = "Error Calling Gemini API"
        }

    })

})