/* const cityName = document.querySelector('.cityName')
const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', () => {
  getData(cityName.value)
  
})

 async function getData(city){
  const apiKey= 'c2a1ace036c0ffde1bfc93eb1e23ca2d' ;
  const mainUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const responseWeather= await fetch(mainUrl);
  const weatherData = await responseWeather.json();
  console.log(weatherData)
  const weather = weatherData.weather[0].main;
  const weatherTemp = weatherData.main.temp;
  const weatherHum= weatherData.main.humidity;
  switch (weather) {
    case 'Clear'
        
  } 
  document.querySelector('.weather').innerHTML = `${city} , ${weather} Temperature:${weatherTemp} Humidty:${weatherHum}`;
} */


async function Time1(){
  await setTimeout(()=>{
    console.log('1')
  },1000)
}


  
 async function Time2(){
   await setTimeout(()=>{
     console.log('2')
  },500)
}


Time1();
Time2();






