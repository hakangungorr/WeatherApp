const inputName = document.querySelector('.cityName');
const searchButton = document.querySelector('.searchButton')
const weatherIcon = document.querySelector('.weather-img');
searchButton.addEventListener('click', ()=>{
  getData(inputName.value)
})


async function getData(nameCity) {
  myApi= "0a4795a2f5822b54408050d83f88aa50"
  url =`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${myApi}&units=metric`
  const data = await fetch(url)
  const cityWeather = await data.json()
  console.log(cityWeather)
  const temperature = cityWeather.main.temp;
  const humidty = cityWeather.main.humidity;
  const mainWeather = cityWeather.weather[0].main
  console.log(mainWeather)


  if(mainWeather === "Clouds"){
    weatherIcon.src = "images/clouds.png"

  }else if(mainWeather === "Clear"){
    weatherIcon.src = "images/clear.png"
  }else if(mainWeather === "Rain"){
    weatherIcon.src = "images/rain.png"
  }else if(mainWeather === "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
  }else if(mainWeather === "Mist"){
    weatherIcon.src = "images/mist.png"
  }

  let nameCityx=nameCity.toUpperCase()

  document.querySelector('.temperature').innerHTML = `${temperature} &#8451;`
  document.querySelector('.temp-hum').innerHTML = `${humidty}`
  document.querySelector('.city').innerHTML = `${nameCityx}`
  
  
}


