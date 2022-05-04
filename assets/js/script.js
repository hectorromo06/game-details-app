console.log("js test");
var apiKey = '92c502e459c9c620a303073cdca1176311116a12';
var apiURL = 'https://www.giantbomb.com/api/search/?api_key=';

$('#submit-btn').click(function (event) {
    event.preventDefault();

    var playerName = event.target.parentElement[0].value;

    // apiCall(playerName);
});

var button = document.getElementById("searchBtn");
button.addEventListener('click', function() {
  //get value from input
  var player = document.getElementById("searchTerm").value;

  var url = apiURL;

    fetch(url)
      .then((response) => {
        return (response.json());
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("Player", data.player);

        var results = document.getElementById("results");
      });
      // clears input box
    
  $("#searchTerm").val("");
})




//store value of input 
// let playerName = $("#searchTerm").val();

// $("#searchTerm").click(function(event){
//   if (event.which === 13) {
//     event.preventDefault();
//     $("#searchBtn").click();
//   }
      //var playerName = event.target.parentElement[0].value;
// });

// $("#searchBtn").on("click", function() {

//   // get the input from the user
//   playerName = $("#searchTerm").val();

//   