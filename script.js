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

//function for the ajax and to retrive the infomation from the open weather map site with the API key
        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f80ecd3a4607dd7ef4888b33f7c6f3e5",
            type: "GET",
            dataType: "JSON",
            data: {q:searchCity, appid:apiKey, units:'metric'},
            // function to retrieve the data which shows up in the netweork part of the console log
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

 //Need to create a function to have the information post on the HTML document. 
    //create and .then statement to retrive the information 

    
 // Need to create a function to show the information adn also style the information 
