var myArray = [];
var searchCity = $("#searchCity");
var apiKey = "f80ecd3a4607dd7ef4888b33f7c6f3e5"; 
console.log(apiKey);
var url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
// var forecastWeatherUrl =  "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";

var createBtn = document.getElementById ("newBtn");


$(document).ready(function(){
    $("#searchBtn").submit(function(event){
        ready(event);

        var searchBtn =$("#searchBtn").val();

        document.getElementById("Btn").innerHTML += "<button>" + myArray[i] + "</button>";

    });
});
//creating an array for buttons
// function addButton () {
//     for (var i=0; i < myArray.length; i++) {
//         document.getElementById("newBtn").innerHTML += "<button>" + myArray[i] + "</button>";
//     }
// }
// addButton ();


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
        var searchCity = $("#searchCity").val();
        var url = buildQueryUrl ();

        //function for the ajax and to retrive the infomation from the open weather map site with the API key

    function buildQueryUrl () {
        var url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
        var uvUrl = uvUrl;
        var apiKey = {"apiKey": apiKey};
        apiKey.q = $("#searchCity").val().trim();

};
        //ajax function for the weather for the current day 
        $.ajax({
            url:"https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
            method: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'imperial'},
            // function to retrieve the data which shows up in the netweork part of the console log
            }).then(function(response){
            console.log(response);

            for (var i=0; i < myArray.length; i+=5){

                // function to have the information post on the HTML document. 
                var cityName =$("<strong><h3><strong>").text(searchCity);
                var temp_min =$("<h6>").text("Temperature: " + response.main.temp_min + " *F ");
                var temp_max =$("<h6>").text("Temperature: " + response.main.temp_max + " *F ");
                var humidity =$("<h6>").text("Humidity: " + response.main.humidity + " % ");
                var speed = $("<h6>").text("Wind Speed: " + response.wind.speed + " MPH ");
                var pressure = $("<h6>").text("Pressure: " + response.main.pressure + " Air ");
                var coord = $("<h6>").text("Coordinates: Latitude: " + response.coord.lat + "  " + " " + " Longitude: " +  response.coord.lon);
            

            $('.weather-info').empty().append(cityName, temp_max, temp_min, humidity, speed, pressure, coord)
        }
            //make another ajax call to get the 5 day forecast, generate the UI, need to change to 5day forecast
        $.ajax({
                url:"https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
                method: "GET",
                dataType: "JSON",
                data: {q:searchCity, appid:apiKey, units:'imperial'},
                // function to retrieve the data which shows up in the netweork part of the console log
                }).then(function(weatherForecastRes){
                    console.log(weatherForecastRes);

                for (var i=0; i < myArray.length; i+=8){

                    var cityName =$("<strong><h2><strong>").text(searchCity);
                    var temp_min =$("<h6>").text("Temperature: " + response.main.temp_min + " *F ");
                    var temp_max =$("<h6>").text("Temperature: " + response.main.temp_max + " *F ");
                    var humidity =$("<h6>").text("Humidity: " + response.main.humidity + " % ");
                    var speed = $("<h6>").text("Wind Speed: " + response.wind.speed + " MPH ");
                    var pressure = $("<h6>").text("Pressure: " + response.main.pressure + " Air ");
                    var coord = $("<h6>").text("Coordinates: Latitude: " + response.coord.lat + "  " + " " + " Longitude: " +  response.coord.lon);
                    }
        
                $('#weather-section').empty().append(cityName, temp_max, temp_min, humidity, speed, pressure, coord)
            });
        });
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(myArray)
        localStorage.getItem('#searchCity');
    });
});
    //ajax function for the UV index
    // $.ajax({
    //     uvUrl:uvUrl,
    //     method: "GET",
    //     dataType: "JSON",
    //     data: {q:searchCity, appid:apiKey, units:'imperial'},
    //     // function to retrieve the data which shows up in the netweork part of the console log
    //     }).then(function(uvResponse){
    //     console.log(uvResponse);
    // });


//function to try and append the searches on the html page 
 function addData(){
     var inputCityList = document.getElementById 
     ("searchCity").value;

     myArray.push(inputCityList);
     //created pval for a list to descend the city names
     var pval = "";

     for (i=0; i<myArray.length; i++) {
        pval = pval + myArray[i] + "<br/>";
    };
    document.getElementById("cityList").innerHTML = pval;
    
 };

 //function to clear out the search 
 function clear (){
     $("#weather-section").empty();
 };
 $("#clearCityBtn").on("click", clear);

 

 //create and .then statement to retrive the information 
// // create a button for input textbox
// $('.createBtn').on("click", function() {
//     var cityList = $("#searchCity").val().trim();
//     console.log(cityList);
// });