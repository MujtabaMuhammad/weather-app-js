
document.getElementById('weatherForm').addEventListener('submit',weatherData);

function weatherData(e){
    e.preventDefault();
    lat = document.getElementById('lat').value;
    long = document.getElementById('long').value;
    console.log(lat,long)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e965e30f677c0258b5f34bceed2b9131`)
    .then(response =>{
        return response.json();})
        .then(data => {
            console.log("Temperature parameters: ", data.main);
            let recoveredData = document.createTextNode(`Temprature: ${data.main.temp}
                Humidity: ${data.main.humidity}
                Description: ${data.weather[0].description}`);
            document.getElementById('weather-result').appendChild(recoveredData);
        }).catch(error => {
                console.log(error);
                alert('An error occured, please check coordinates.');})
}
