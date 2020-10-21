var myArray = [];
var searchCity = $("#searchCity");
var apiKey = "f80ecd3a4607dd7ef4888b33f7c6f3e5"; 
console.log(apiKey);
var url = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5";

$(document).ready(function(){
    $("#searchBtn").submit(function(event){
        ready(event);
    });
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
        var apiKey = {"apiKey": apiKey};
        apiKey.q = $("#searchCity").val().trim();

};

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
            type: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'imperial'},
            // function to retrieve the data which shows up in the netweork part of the console log
        }).then(function(response){
            console.log(response);

            // create a function to have the information post on the HTML document. 
            var cityName =$("<strong><h4><strong>").text(searchCity);
            var temp =$("<h4>").text("temp: " + response.main.temp);
            var speed = $("<h4>").text("speed: " + response.wind.speed);
            var humidity =$("<h4>").text(response.main.humidity);
            var pressure = $("<h4>").text(response.main.pressure);

            $('.weather-info').empty().append(cityName, temp, speed, humidity, pressure)
            //make another ajax call to get the 5 day forecast, generate the UI, 
            $.ajax({
                url:"http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
                type: "GET",
                dataType: "JSON",
                data: {q:searchCity, appid:apiKey, units:'imperial'},
                // function to retrieve the data which shows up in the netweork part of the console log
            }).then(function(forecast5Day){
                console.log(forecast5Day);

                var cityName =$("<strong><h4><strong>").text(searchCity);
                var temp =$("<h4>").text("temp: " + response.main.temp);
                var speed = $("<h4>").text("speed: " + response.wind.speed);
                var humidity =$("<h4>").text(response.main.humidity);
                var pressure = $("<h4>").text(response.main.pressure);
    
                $('#weather-section').empty().append(cityName, temp, speed, humidity, pressure)
            });

        });
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(myArray)
        localStorage.getItem('#searchCity');
    });
});


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
    
 // Need to create a function to show the information adn also style the information 
