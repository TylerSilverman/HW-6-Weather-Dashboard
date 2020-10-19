var myArray = [];
var searchCity = $("#searchCity");


//function for the search button and the local storage
$(document).ready(function(){
    $("#searchBtn").click(function(e){
        e.preventDefault();
        var searchCity = $("#searchCity").val();
        // myArray.push(searchCity)
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