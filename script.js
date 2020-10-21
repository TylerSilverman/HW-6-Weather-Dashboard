var myArray = [];
var searchCity = $("#searchCity");
var apiKey = "f80ecd3a4607dd7ef4888b33f7c6f3e5"; 
console.log(apiKey);
var url = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";


$(document).ready(function(){
    $("#searchBtn").submit(function(event){
        ready(event);
    });
});
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
        var url = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";
        var uvUrl = uvUrl;
        var apiKey = {"apiKey": apiKey};
        apiKey.q = $("#searchCity").val().trim();

};

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
            uvUrl: uvUrl,
            type: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'imperial'},
            // function to retrieve the data which shows up in the netweork part of the console log
        }).then(function(response){
            console.log(response);

            // function to have the information post on the HTML document. 
                var cityName =$("<strong><h3><strong>").text("Today's Weather For: " + searchCity);
                var temp =$("<h6>").text("Temperature: " + response.main.temp + " *F ");
                var humidity =$("<h6>").text("Humidity: " + response.main.humidity + " % ");
                var speed = $("<h6>").text("Wind Speed: " + response.wind.speed + " MPH ");
                var pressure = $("<h6>").text("Pressure: " + response.main.pressure + " Air ");
                var coord = $("<h6>").text("Coordinates: " + response.coord.lat + response.coord.lon + " Coordinates ");
            

            $('.weather-info').empty().append(cityName, temp, humidity, speed, pressure, coord)
            //make another ajax call to get the 5 day forecast, generate the UI, 
            $.ajax({
                url:"http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
                uvUrl: uvUrl,
                type: "GET",
                dataType: "JSON",
                data: {q:searchCity, appid:apiKey, units:'imperial'},
                // function to retrieve the data which shows up in the netweork part of the console log
            }).then(function(forecast5Day){
                console.log(forecast5Day);

                var cityName =$("<strong><h2><strong>").text("The 5 Day Forecast for: " + searchCity);
                var temp =$("<h6>").text("Temperature: " + response.main.temp + " *F ");
                var humidity =$("<h6>").text("Humidity: " + response.main.humidity + " % ");
                var speed = $("<h6>").text("Wind Speed: " + response.wind.speed + " MPH ");
                var pressure = $("<h6>").text("Pressure: " + response.main.pressure + " Air ");
    
                $('#weather-section').empty().append(cityName, temp, humidity, speed, pressure)
            });

        });
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(myArray)
        localStorage.getItem('#searchCity');
    });
});
// create the search button for each city that is created
// function createBtn () {
//     var cityName = $("<button>").text
//     cityName.addClass("cityNameBtn btn-block");
//     weather-info.append(cityName);
// };
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
function display (){

}
