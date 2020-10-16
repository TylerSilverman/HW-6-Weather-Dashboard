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