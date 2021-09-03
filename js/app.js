 
 const API_KEY = `efd2bede0c94f59ecae4fbac91c2c308`;

 const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url)
 }