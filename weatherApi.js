document.getElementById('weatherForm').addEventListener('submit',weatherData);

function weatherData(e){
    e.preventDefault();
    lat = document.getElementById('lat').value;
    long = document.getElementById('long').value;
    apid = document.getElementById('api-key').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apid}&units=imperial`)
    .then(response =>{
        return response.json();})
        .then(data => {
            //console.log("Temperature parameters: ", data.name);
            let recoveredData = document.createTextNode(`Location: ${data.name}
                Temprature: ${data.main.temp}°F
                Humidity: ${data.main.humidity}%
                Description: ${data.weather[0].description}`);
                dataDiv.style.display = "block";
            document.getElementById('weather-result').appendChild(recoveredData);
        }).catch(error => {
                console.log(error);
                alert('An error occured, please check coordinates and verify your API key.');})
}
