var myArray = [];
var searchCity = $("#searchCity");
var apiKey = "f80ecd3a4607dd7ef4888b33f7c6f3e5"; 
console.log(apiKey);

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

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
            type: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'metric'},
            
            function (data){
                var weatherForecast = "";
                $.each(data.weather, function(data, val){
                    weatherForecast = "<p><br>" + data.name + val.icon + data.main.temp + " &deg;C " + " | " + val.main + ", " + val.description
                });
                $("#searchCity").HTML(weatherForecast);
            }
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
    }
    document.getElementById("cityList").innerHTML = pval;
 }

 function resetData (){  
 };