var myArray = [];
var searchCity = $("#searchCity");
var apiKey = "760586900268b50d71c139dd75e4cb96"; 

//function for the search button and the local storage
$(document).ready(function(){
    $("#searchBtn").click(function(e){
        e.preventDefault();
        var searchCity = $("#searchCity").val();

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=760586900268b50d71c139dd75e4cb96",
            type: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'metric'},
            
            function (data){
                var cityList = "";
                $.each(data.weather, function(data, val){
                    cityList = "<p><br>" + data.name + val.icon + + data.main.temp + " &deg;C " + " | " + val.main + ", " + val.description
                });
                $("#searchCity").HTML(cityList);
                console.log(apiKey);
            }
        });
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(myArray)
        localStorage.getItem('#searchCity');
        
    });
});


// function formatWeatherSearch (jsonObject){
//     var city_name = jsonObject.name
//     var city_weather = jsonObject.weather[0].main;
//     var city_temperature = jsonObject.main.temp;

//     $("#city-name").text(city_name);
//     $("#city-weather").text(city_weather);
//     $("#city-temperature").text(city_temperature+ " Celsius");
// }

//function to try and append the searches on the html page 
 function addData(){
     var inputCityList = document.getElementById 
     ("searchCity").value;

     myArray.push(inputCityList);
     //created pval for a list to descend the city names
     var pval = "";

     for (i=0; i<myArray.length; i++) {
        pval = pval + myArray[i] + "<br/>";
    }
    document.getElementById("cityList").innerHTML = pval;
 }

 function resetData (){  
 };