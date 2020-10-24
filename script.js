$(document).ready(function(){
    var searchArray = [];
    var appid = "f80ecd3a4607dd7ef4888b33f7c6f3e5"; 
    var searchInput = $(".search Input");
    var city =$(".cityHistory");
    var searchBtn = $(".search button");
    var weatherDetailsMain = $(".weatherDetailsMain");
    var forecast =$(".forecast"); 
    
    //function for the current weather 
    function getCurrentWeather (city){
        console.log(city);
        
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?appid=" + appid + "&units=imperial&q=" + city; 
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response)

            weatherDetailsMain.find(".city").text(city);
            weatherDetailsMain.find(".temperature span").text(response.main.temp);
            weatherDetailsMain.find(".humid span").text(response.main.humidity); 
            weatherDetailsMain.find(".windSpeed span").text(response.wind.speed);
            weatherDetailsMain.find(".uvIndex span").attr("class", " ").text("");
            getUVIndex(response.coord.lat, response.coord.lon);

            weatherDetailsMain.show();
        }).catch(function(err){
            alert("Cant Find City");
        });
    }
    //function for the UV index 
    function getUVIndex (lat, lon){
        console.log(city);
        
        var queryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=" + appid + "&lat=" + lat + "&lon=" + lon; 
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response)
            //creeated if statement to determine the uvIndex dannger zone
            weatherDetailsMain.find(".uvIndex span").text(response.value);
            if(response.value > 6){
                weatherDetailsMain.find(".uvIndex span").addClass("bg-warning").addClass("text-white");
            }else if (response.value < 3){
                weatherDetailsMain.find(".uvIndex span").addClass("bg-primary").addClass("text-white");
            }else{
                weatherDetailsMain.find(".uvIndex span").addClass("bg-success").addClass("text-white");
            }
        }).catch(function(err){
            console("Cant Find City");
        });
    }

    searchBtn.on("click", function(){
        if(searchInput.val()){
            getCurrentWeather(searchInput.val());
            searchInput.val("");
        }
    });

    // cityHistory.on("click", ".cityHistory", function(){
    //     if($(this).attr("")){
    //         getCurrentWeather($(this).attr(""));
    //     }
    // });

    weatherDetailsMain.hide();
    forecast.hide();

})


// //setting the current Time
// $(document).ready(function(){
//     var currentTime = moment().format('LLLL');
//     $('#current-weather').text(currentTime);
    
    
//     var currentTime = moment().hour();
// });
//             $('.weather-info').empty().append(cityName, temp_max, temp_min, humidity, speed, pressure, coord)
//         }
//             //make another ajax call to get the 5 day forecast, generate the UI, need to change to 5day forecast
//         $.ajax({
//                 url:"https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
//                 method: "GET",
//                 dataType: "JSON",
//                 data: {q:searchCity, appid:apiKey, units:'imperial'},
//                 // function to retrieve the data which shows up in the netweork part of the console log
//                 }).then(function(weatherForecastRes){
//                     console.log(weatherForecastRes);

//                 for (var i=0; i < myArray.length; i+=8){

//                     var cityName =$("<strong><h2><strong>").text(searchCity);
//                     var temp_min =$("<h6>").text("Temperature: " + response.main.temp_min + " *F ");
//                     var temp_max =$("<h6>").text("Temperature: " + response.main.temp_max + " *F ");
//                     var humidity =$("<h6>").text("Humidity: " + response.main.humidity + " % ");
//                     var speed = $("<h6>").text("Wind Speed: " + response.wind.speed + " MPH ");
//                     var pressure = $("<h6>").text("Pressure: " + response.main.pressure + " Air ");
//                     var coord = $("<h6>").text("Coordinates: Latitude: " + response.coord.lat + "  " + " " + " Longitude: " +  response.coord.lon);
//                     }
        
//                 $('#weather-section').empty().append(cityName, temp_max, temp_min, humidity, speed, pressure, coord)
//             });
//         });
//         localStorage.setItem('#searchCity',JSON.stringify(myArray));
//         console.log(myArray)
//         localStorage.getItem('#searchCity');
//     });
// });

//  //function to clear out the search 
//  function clear (){
//      $("#weather-section").empty();
//  };
//  $("#clearCityBtn").on("click", clear);
