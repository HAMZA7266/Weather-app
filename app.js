function w(c){

var f = fetch('https://api.openweathermap.org/data/2.5/weather?lat=24.8184832&lon=67.1514624&appid=9d7800e156a3a123abaeb9e6018c8cb5&&units=metric&&q='+c)
    .then(result=> result.json())
    .then((result)=>{
      
        if(result.cod == 404 ){

document.getElementById("invalidname").style.display="block"
document.getElementById("bg").style.height="100px"
document.getElementById("weather").style.display="none"
console.log("lol")

        }
        else{
        console.log(result)
            city.innerText = `${result.name} `
            temp.innerHTML = Math.round(result.main.temp)+"°c"
            weath.innerText = result.weather[0].main
            humidity.innerText = "Humidity: "+result.main.humidity+"%"
            wind.innerText = "Wind: "+result.wind.speed+"km/h"



            if(result.weather[0].main === "Clouds"){
logo.src="./images/clouds.gif"
            }
           else if(result.weather[0].main === "Smoke"){
logo.src="./images/smoke.gif"
            }
           else if(result.weather[0].main === "Clear"){
logo.src="./images/weather-1-unscreen.gif"
logo.style.width="200px"
            }
           else if(result.weather[0].main === "Drizzle"){
logo.src="./images/rain.gif"
            }
           else if(result.weather[0].main === "Humidity"){
logo.src="./images/humidity.png"
            }
           else if(result.weather[0].main === "Mist"){
logo.src="./images/mist.png"
            }
           else if(result.weather[0].main === "Rain"){
logo.src="./images/rain.gif"
            }
           else if(result.weather[0].main === "Wind"){
logo.src="./images/wind.gif"
            }
           else if(result.weather[0].main === "Snow"){
logo.src="./images/snoww.gif"
            }
           else if(result.weather[0].main === "Haze"){
logo.src="./images/hazee.gif"
            }
   


            document.getElementById("invalidname").style.display="none"
document.getElementById("bg").style.height="450px"
document.getElementById("weather").style.display="block"
        }
     
    })
    .catch((err)=>{
        console.log("ji",err)
    })
}
var logo = document.getElementById("img")
var search = document.getElementById("search")
var city = document.getElementById("city")
var temp = document.getElementById("temp")
var weath = document.getElementById("weath")
var btn = document.getElementById("btn")
var wind = document.getElementById("wind")
var humidity = document.getElementById("Humidity")

if(search.value===""){
    w("karachi")
}
search.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      btnn(); 
      search.value=""
    }
  });

function btnn(){



    if(search.value.trim()===""){
        document.getElementById("fill").style.display="block"
btn.disabled=true


    } 

    else{

        document.getElementById("weather").style.display="block"
        document.getElementById("bg").style.height="450px"
     w(search.value)
    }
    if(search.value!=" "){
        btn.disabled=false
        document.getElementById("fill").style.display="none"
        }

    
     
}


