async function getWeather() {
    let city = document.getElementById("city").value.trim();
    let result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "❌ Please enter a city";
        return;
    }

   let apiKey = "4fad08e8c819e2fbe99ffd2abfdfd0b7";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod == 200) {
            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡️ Temperature: ${data.main.temp}°C</p>
                <p>🌤️ Weather: ${data.weather[0].main}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            result.innerHTML = "❌ " + data.message;
        }

    } catch (error) {
        result.innerHTML = "⚠️ Error fetching data";
    }
}