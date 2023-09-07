const inputName = document.querySelector('.cityName');
const searchButton = document.querySelector('.searchButton')
const weatherIcon = document.querySelector('.weather-img');
const errorIcon = document.querySelector('.err-img');
searchButton.addEventListener('click', ()=>{
  getData(inputName.value)
  inputName.value = ""
})


async function getData(nameCity) {
  myApi= "0a4795a2f5822b54408050d83f88aa50"
  url =`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${myApi}&units=metric`
  const data = await fetch(url)
  console.log(data)

  if (data.status === 404){
    errorIcon.src= "images/404.png"
    document.querySelector('.display-weather').style.display = "none";
    document.querySelector('.error').style.display = "block";
    

  }else{
    const cityWeather = await data.json()
    console.log(cityWeather)
    const temperature = cityWeather.main.temp;
    const humidty = cityWeather.main.humidity;
    const mainWeather = cityWeather.weather[0].main;
    const wind = cityWeather.wind.speed; 
    const descriptionWeather = cityWeather.weather[0].description;
    console.log(mainWeather)
  
  //*Weather img control 
    if(mainWeather === "Clouds"){
      weatherIcon.src = "images/clouds.png";
    }else if(mainWeather === "Clear"){
      weatherIcon.src = "images/clear.png";
    }else if(mainWeather === "Rain"){
      weatherIcon.src = "images/rain.png";
    }else if(mainWeather === "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
    }else if(mainWeather === "Mist"){
      weatherIcon.src = "images/mist.png";
    }
  
    let upperNameCity=nameCity.toUpperCase();
    let description=descriptionWeather.toUpperCase();
    let newTemp = temperature.toFixed(1);
   //*Using Dom
    
    document.querySelector('.description').innerHTML = `${description}`
    document.querySelector('.weather-wind').innerHTML = `${wind}km/h`
    document.querySelector('.temperature').innerHTML = `${newTemp} &#8451;`
    document.querySelector('.weather-hum').innerHTML = `${humidty}&percnt;`
    document.querySelector('.fa-location-dot').innerHTML = `${upperNameCity}`
    
    document.querySelector('.display-weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
  }
  
  
}

