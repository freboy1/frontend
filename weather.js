document.addEventListener("DOMContentLoaded", function () {
    // Get the current datetime
    const now = new Date();
    document.getElementById("datetime").textContent = now.toLocaleString();

    // Fetch and display the weather
    const city = "Astana";  
    const apiKey = "a184cec28e18696aa72e9629c0f4f09c"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById("weatherDisplay").textContent = `Погода в ${city}: ${weather}, Температура: ${temp}°C`;
        })
        .catch(error => console.log("Error!!: ", error));
});
