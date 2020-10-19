var myArray = [];
var searchCity = $("#searchCity");




// storedArray = JSON.parse(localStorage.getItem('#searchCity'));

//function for saving to local storage and saving it in local storage
// if(Array.isArray(storedArray)){
//     citiesArray = storedArray;
// }


//function for the search button and the local storage
$(document).ready(function(){
    $("#searchBtn").click(function(e){
        e.preventDefault();
        var searchCity = $("#searchCity").val();
        myArray.push(searchCity)
        localStorage.setItem('#searchCity',JSON.stringify(myArray));
        console.log(myArray)
    })
   
})

//function to try and append the searches on the html page 
 function addData(){
     var inputCityList = document.getElementById 
     ("searchCity").value;

     myArray.push(inputCityList);

     var pval = "";

     for (i=0; i<myArray.length; i++) {
        pval = pval + myArray[i] + "<br/>";
    }
    document.getElementById("cityList").innerHTML = pval;
 }
 

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