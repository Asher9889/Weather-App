const apiKey = "cc3d8ed8469ad2d068b93a8a90db0397";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function getData (city) {
  try{
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data)
  

  document.querySelector("#temperature").innerText = data.main.temp + "°c";
  document.querySelector("#city").innerText = data.name;
  document.querySelector("#wind-speed").innerText = data.wind.speed + " km/h";
  document.querySelector("#humidity").innerText = data.main.humidity + "%";

  const imgIcon = document.querySelector("#weatherIcon");
  if(data.weather[0].main == "Haze") {
  imgIcon.src = "/images/mist.png";
  } else if (data.weather[0].main == "Clear") {
    imgIcon.src = "/images/clear1.png";
  } else if (data.weather[0].main == "Clouds") {
    imgIcon.src = "/images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    imgIcon.src = "/images/drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    imgIcon.src = "/images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    imgIcon.src = "/images/snow.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    imgIcon.src = "/images/thunderstorm.png";
  }

  } catch(e) {
    console.log(prompt("City Not Found " + e));
    // console.log(e);
  }

  
 
}

const searchBox = document.querySelector("input");
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  getData(searchBox.value);
})

