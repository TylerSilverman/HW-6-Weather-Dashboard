$(document).ready(function(){
    var searchArray = [];
    var appid = "6f6303bd0f52f27c59eaf22e57fb595f"; 
    var searchInput = $(".search Input");
    var city =$(".cityHistory");
    var cityHistory =$(".cityHistoryItem");
    var searchBtn = $(".search button");
    var weatherDetailsMain = $(".weatherDetailsMain");
    var forecast =$(".forecast"); 

    function CityHistory (){
        var searchArray = JSON.parse(localStorage.getItem('cityHistory'));
        if(searchArray) cityHistory = searchArray;

        cityHistory.find("a").remove();
        cityHistory.append(cityHistory)
    };
    
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
            weatherDetailsMain.find(".icon").attr("src", "http://openweather.org/img/w" + response.weather[0].icon + ".png");
            weatherDetailsMain.find(".temperature span").text(response.main.temp);
            weatherDetailsMain.find(".humid span").text(response.main.humidity); 
            weatherDetailsMain.find(".windSpeed span").text(response.wind.speed);
            weatherDetailsMain.find(".uvIndex span").attr("src", "http://openweather.org/img/w" + response.weather[0].icon + ".png");
            getUVIndex(response.coord.lat, response.coord.lon);

            weatherDetailsMain.show();

            getforecastDayWeather(city);
        }).catch(function(err){
            console.log("Cant Find City");
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
//functioon for 5 day forecast
    function getforecastDayWeather(city){
        console.log(city);
        
        var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=" + appid + "&units=imperial&q=" + city; 
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response);

            var filteredList = response.list.filter(function(date){
                return date.dt_txt.indexOf("15:00:00") > -1;
            });
            console.log(filteredList);
            filteredList.forEach(function(date,i){
                $(".day" + (i+1)).find(".date").text(date.dt_txt.slice(0, date.dt_txt.indexOf(" ")));
                $(".day" + (i+1)).find(".icon").attr("src", "http://openweather.org/img/w" + date.weather[0].icon + ".png");
                $(".day" + (i+1)).find(".temperature span").text(date.main.temp);
                $(".day" + (i+1)).find(".humid span").text(date.main.humidity);
            })

            forecast.show();
        }).catch(function(err){
            console.log("Cant Find City");
        });
    }

    searchBtn.on("click", function(){
        if(searchInput.val()){
            getCurrentWeather(searchInput.val());
            searchInput.val("");
        }
    });

    cityHistory.on("click", ".cityHistoryItem", function(){
        if($(this).attr("data-city")){
            getCurrentWeather($(this).attr("data-city"));
    
        };
    });

    weatherDetailsMain.hide();
    forecast.hide();
    CityHistory();

});