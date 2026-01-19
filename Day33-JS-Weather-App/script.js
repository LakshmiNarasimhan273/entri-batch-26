async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    const apiKey = "532adf229a0d91f8c0d7af84018c6bff";
    // replace your own api key, it will not works for you

    if (!city) {
        resultDiv.innerHTML = `
        <div class="alert alert-warning">Please enter a city name</div>
        `
        return;
    }
    resultDiv.innerHTML = `
    <div class="spinner-border text-primary text-center" role="status"></div>
    `

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        resultDiv.innerHTML = `
        <h4>${data.name},${data.sys.country}</h4>
        <p><b>${data.weather[0].main}</b></p>
        <p>🌡️ Temperature: ${data.main.temp}</p>
        <p>💧 Humidity: ${data.main.humidity}</p>
        <p>💨 Pressure: ${data.main.pressure}</p>
        <p>🍃 Wind Speed: ${data.wind.speed}</p>
        `;
    } catch (err) {
        resultDiv.innerHTML = `
        <div class="alert alert-danger">Error: ${err.message}</div>
        `
    }

}