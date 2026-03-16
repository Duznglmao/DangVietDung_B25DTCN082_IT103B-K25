const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

function getWeather() {
    let cityName = document.getElementById("cityInput").value.trim();
    let resultDiv = document.getElementById("weatherResult");

    let data = weatherData[cityName];

    if (data) {
        resultDiv.innerHTML = `
            <h3>Thời tiết tại ${cityName} ${data.icon}</h3>
            <p>Nhiệt độ: ${data.temperature}°C</p>
            <p>Độ ẩm: ${data.humidity}%</p>
            <p>Tốc độ gió: ${data.windSpeed} km/h</p>
            <p>Trạng thái: ${data.description}</p>
        `;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Không tìm thấy thông tin cho thành phố "${cityName}"!</p>`;
    }
}