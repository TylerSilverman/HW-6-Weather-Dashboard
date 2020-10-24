var myArray = [];
var searchCity = $("#searchCity");
var apiKey = "f80ecd3a4607dd7ef4888b33f7c6f3e5"; 
console.log(apiKey);
var url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";

var createBtn = document.getElementById ("newBtn");

//setting the current Time
$(document).ready(function(){
    var currentTime = moment().format('LLLL');
    $('#current-weather').text(currentTime);
    var currentTime = moment().hour();
});

//function for the search button and the local storage
$(document).ready(function(){
    $("#searchBtn").click(function(e){
        e.preventDefault();
        searchCity = $("#searchCity").val();
        url = buildQueryUrl ();

        //function for the ajax and to retrive the infomation from the open weather map site with the API key

        function buildQueryUrl () {
        url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
        uvUrl = uvUrl;
        apiKey = {"apiKey": apiKey};
        apiKey.q = $("#searchCity").val().trim();


        //ajax function for the weather for the current day 
        $.ajax({
            url:"https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
            method: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'imperial'},
            // function to retrieve the data which shows up in the netweork part of the console log
            }).then(function(response){
            // console.log(response);

            
                for (var i=0; i < myArray.length; i+=5){

                    // function to have the information post on the HTML document. 
                    var cityName =$("<strong><h3><strong>").text(city.coord.name);
                    var tempMin =$("<h6>").text("Temperature: " + response.main.temp_min + " *F ");
                    var tempMax =$("<h6>").text("Temperature: " + response.main.temp_max + " *F ");
                    var humidity =$("<h6>").text("Humidity: " + response.main.humidity + " % ");
                    var speed = $("<h6>").text("Wind Speed: " + response.wind.speed + " MPH ");
                    var pressure = $("<h6>").text("Pressure: " + response.main.pressure + " Air ");
                    var coord = $("<h6>").text("Coordinates: Latitude: " + response.coord.lat + "  " + " " + " Longitude: " +  response.coord.lon);
                

                    $('.weather-info').empty().append(cityName, tempMin, tempMax, humidity, speed, pressure, coord)
                }
            $.ajax({
                url:"https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
                method: "GET",
                dataType: "JSON",
                data: {q:searchCity, appid:apiKey, units:'imperial'},
                // function to retrieve the data which shows up in the netweork part of the console log
                }).then(function(weatherForecastRes){
                    console.log(weatherForecastRes);

                for (var i=0; i < weatherForecastRes.length; i+=8){

                    var cityName =$("<strong><h2><strong>").text(searchCity);
                    var temp_min =$("<h6>").text("Temperature: " + weatherForecastRes.main.temp_min + " *F ");
                    var temp_max =$("<h6>").text("Temperature: " + weatherForecastRes.main.temp_max + " *F ");
                    var humidity =$("<h6>").text("Humidity: " + weatherForecastRes.main.humidity + " % ");
                    var speed = $("<h6>").text("Wind Speed: " + weatherForecastRes.wind.speed + " MPH ");
                    var pressure = $("<h6>").text("Pressure: " + weatherForecastRes.main.pressure + " Air ");
                    var coord = $("<h6>").text("Coordinates: Latitude: " + weatherForecastRes.coord.lat + "  " + " " + " Longitude: " +  response.coord.lon);
                    }
        
                $('#weather-section').empty().append(cityName, temp_max, temp_min, humidity, speed, pressure, coord)
            });
        });
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(searchCity)
        localStorage.getItem('#searchCity');
    };
});
    //function to clear out the search 
    function clear (){
        $("#weather-section").empty();
    };
    $("#clearCityBtn").on("click", clear);
});

    function submit () {
        $("#cityList").append().newBtn;
    };
    $("#searchBtn").on("click", submit);

