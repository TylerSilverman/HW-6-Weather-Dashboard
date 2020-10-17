var searchCity = localStorage.getItem("#searchCity");



$("#seachCityBtn").on("click", function (){
    var search = $("#searchCity").val();

    localStorage.setItem('#searchCity', search);
    console.log("search of city saved");

    upDateHistory()

})


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