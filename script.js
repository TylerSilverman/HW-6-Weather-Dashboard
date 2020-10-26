$(document).ready(function(){
    var searchArray = [];
    var appid = "b7ca59da7f0fc823f65b65547e3d223e"; 
    var searchInput = $(".search Input");
    var city =$(".cityHistory");
    var cityHistory =$(".cityHistoryItem");
    var searchBtn = $(".search button");
    var weatherDetailsMain = $(".weatherDetailsMain");
    var forecast =$(".forecast"); 
    var weatherIcons = "https://openweathermap.org/img/wn/";
    
    $("#icon").attr('src, icon');

    //added in current day time to show for the day 
    var timeNow = moment().format('LL');
    $("#currentDate").text(timeNow);

    var timeNow = moment().hour();

    function cityHistory (){
        // var searchArray = localStorage.getItem("cityHistory");
        // $("cityHistory").val(searchArray);

        var searchArray = JSON.parse(localStorage.getItem('cityHistory'));
        if(searchArray) city = searchArray;

        city.find("a").remove();
        city.forEach(function(item){
        city.append('"a href = "#" class="list-group-item list-group-item-action cityHistoryItem"' + item + '">' + item + '</a');
        });
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
            weatherDetailsMain.find(".icon").attr("src", weatherIcons + response.weather[0].icon + ".png");
            weatherDetailsMain.find(".temperature span").text(response.main.temp);
            weatherDetailsMain.find(".temperatureFeelLike span").text(response.main.feels_like);
            weatherDetailsMain.find(".humid span").text(response.main.humidity); 
            weatherDetailsMain.find(".windSpeed span").text(response.wind.speed);
            weatherDetailsMain.find(".uvIndex span").text("src");
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
            if(response.value > 2){
                weatherDetailsMain.find(".uvIndex span").addClass("bg-primary").addClass("text-white");
            }else if (response.value < 7){
                weatherDetailsMain.find(".uvIndex span").addClass("bg-warning").addClass("text-white");
            }else{
                weatherDetailsMain.find(".uvIndex span").addClass("bg-danger").addClass("text-white");
            }
        }).catch(function(err){
            console("Cant Find City");
        });
    }
//functioon for 5 day forecast
    function getforecastDayWeather(city){
        // console.log(city);
        
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
                $(".day" + (i+1)).find(".icon").attr("src", weatherIcons + date.weather[0].icon + ".png");
                $(".day" + (i+1)).find(".temperature span").text(date.main.temp);
                $(".day" + (i+1)).find(".temperatureFeelLike span").text(date.main.feels_like);
                $(".day" + (i+1)).find(".humid span").text(date.main.humidity);
                $(".day" + (i+1)).find(".windSpeed span").text(date.wind.speed);
                $(".day" + (i+1)).find(".windDirection span").text(date.wind.deg);
    
            });

            forecast.show();
        }).catch(function(err){
            console.log("Cant Find City");
        });
    }

    searchBtn.on("click", function(){
        if(searchInput.val()){
            getCurrentWeather(searchInput.val());
            searchInput.append();
            searchInput.val("");
        }
    });

    city.on("click", ".cityHistoryItem", function(){
        if($(this).attr("data-city")){
            getCurrentWeather($(this).attr("data-city"));
    
        };
    });

    weatherDetailsMain.hide();
    forecast.hide();
    cityHistory.show();

});