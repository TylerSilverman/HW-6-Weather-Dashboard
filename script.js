var weatherSearch = [];
var searchCity = $("#searchCity");




// storedArray = JSON.parse(localStorage.getItem('#searchCity'));

//function for saving to local storage and saving it in local storage
// if(Array.isArray(storedArray)){
//     citiesArray = storedArray;
// }


//function for the search button and the local storage
$(document).ready(function(){
    $("#searchCityBtn").click(function(e){
        e.preventDefault();
        var searchCity = $("#searchCity").val();
        weatherSearch.push(searchCity)
        localStorage.setItem('#searchCity',JSON.stringify(weatherSearch));
        console.log(weatherSearch)
        searchCityList ();
    })
   
})

//function to try and append the searches on the html page 
function searchCityList () {
    weatherSearch.forEach(function (cityName){
        console.log("hello");
        searchCity.addClass("search");
        console.log("add class search works");
        searchCity.text(cityName)
        console.log("city name listed");
        searchCity.attr("list", $(cityName));
        console.log("what was appended")
        searchCity.append(searchCity);
    }
)};

//     var searchCity = $("<div>");
//     searchCityList ();
 

//function to get the weather from the api weather

// $.ajax({
//     url: "/api/getWeather",
//     data: {
//       zipcode: 10023
//     },
//     success: function( result ) {
//       $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//     }
//   });