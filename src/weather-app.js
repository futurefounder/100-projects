function darkBG() {
    document.getElementById('main').style.backgroundImage = 'url(/img/Tropical/Tropical-sunset.png)';
 };  

 function lightBG() {
    document.getElementById('main').style.backgroundImage = 'url(/img/Tropical/Tropical-day.png)';
 }; 

 const userCity = document.getElementById('city').value;
 console.log(userCity);
 
 function getWeather( userCity ) {
  
   const key = 'API_KEY';
   fetch('https://api.openweathermap.org/data/2.5/weather?id=' + userCity + '&appid=' + key)  
   .then(function(resp) { return resp.json() }) // Convert data to json
   .then(function(data) {
      document.getElementById('description').innerHTML = data.weather[0].description;
      document.getElementById('location').innerHTML = data.name;
   })
   .catch(function() {
     // catch any errors
   });
 }
 
 window.onload = function() {
   getWeather( 2950158 );   
 }

 function drawWeather( data ) {
	let celcius = Math.round(parseFloat(data.main.temp)-273.15);
	let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = data.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = data.name;
}


