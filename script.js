var weatherSearch = [];

// storedArray = JSON.parse(localStorage.getItem('#searchCity'));

//function for the search button
// $(document).ready(function(){
//     $(".submitSearch").click(function(){
//         console.log("search button clicked");
//         // alert("search button clicked");
//     });
// });

//function for saving to local storage and saving it in local storage

var searchCity = localStorage.getItem("#searchCity");

$(document).ready(function(){
    $("#searchCityBtn").click(function(e){
        e.preventDefault();
        var searchCity = $("#searchCity").val();
        weatherSearch.push(searchCity)
        localStorage.setItem('#searchCity',JSON.stringify(weatherSearch));
        console.log(weatherSearch)
        alert("search of city saved");
    
    })
})

//need to create a funtion to have the Search City show up as a drop down in Most Recent Searches

// function has a value to make 
// and creating an if statement 

// function upDateHistory (){
//     items from localStorage and then do a loop to append to city history
// }


// //function from Jquery website 
// $( "button.continue" ).html( "Next Step..." )

// var hiddenBox = $( "#banner-message" );
// $( "#button-container button" ).on( "click", function( event ) {
//   hiddenBox.show();
// });

// $.ajax({
//     url: "/api/getWeather",
//     data: {
//       zipcode: 10023
//     },
//     success: function( result ) {
//       $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//     }
//   });