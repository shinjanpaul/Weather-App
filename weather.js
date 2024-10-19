const apikey = "d62d44f2bca6598851b24620d7dedf18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let cityElement = document.querySelector(".city");
let temp = document.querySelector(".temp");                        
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".Weather-icon");
const hideweather = document.querySelector(".weather");
const errormsg = document.querySelector(".error");

checkweather = async (cityName) => {
    let response = await fetch(apiUrl + cityName + `&appid=${apikey}`);

    if(response.status == 404){
        errormsg.style.display = "block";
        hideweather.style.display ="none";
    }
    else {
        hideweather.style.display = "block";
    
    }

    let data = await response.json();
    console.log(data);
    
    cityElement.innerHTML = data.name;  // Update the city name
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    
    
    if(data.weather[0].main=="Clouds"){               //updating the weather image
        weathericon.src = "clouds.png";
    }  
    else if(data.weather[0].main=="Clear"){
        weathericon.src = "clear.png";
    }
    else if(data.weather[0].main="Rain"){
        weathericon.src = "rain.png";
    }
    else if(data.weather[0].main="Drizzle"){
        weathericon.src = "drizzle.png";
    }
    else if(data.weather[0].main="Mist"){
        weathericon.src = "mist.png";
    }
    hideweather.style.display = "block";
    errormsg.style.display = "none";
    
};

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});



