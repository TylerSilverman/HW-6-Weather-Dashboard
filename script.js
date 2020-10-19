var myArray = [];
var searchCity = $("#searchCity");


//function for the search button and the local storage
$(document).ready(function(){
    $("#searchBtn").click(function(e){
        e.preventDefault();
        var searchCity = $("#searchCity").val();
        var key = "f80ecd3a4607dd7ef4888b33f7c6f3e5";

        $.ajax({
            // url: "api.openweathermap.org/data/2.5/weather",
            url: "api.openweathermap.org/data/2.5/forecast",
            dataType: "JSON",
            type: "GET",
            data: {q:searchCity, appid:key, units: 'metric'},

            success: function (data){
                var weatherForecast = "";
                $.each(data.weather, function(data, val){
                    weatherForecast += "<p><br>" + data.name + val.icon + + data.main.temp + " &deg;C " + " | " + val.main + ", " + val.description
                });
                $("#searchCity").innerHTML(weatherForecast);
            }
        });
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(myArray)
        localStorage.getItem("#searchCity");
        
    })
})

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

 //function for the Query URL with the API key
//  function updateQueryURL () {
//      var queryURL = " ";
//      var queryAPI = {"API-key": " "};
//      console.log("API URL and Key")
//  }
 