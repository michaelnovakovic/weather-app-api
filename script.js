let weather = {
    "apiKey": "f447820917320f2e8f7c825bec1d282d",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=f447820917320f2e8f7c825bec1d282d"
        ).then((response) => response.json())
        .then((data) => console.log(data));
    },
};