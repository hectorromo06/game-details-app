console.log("js test");

var button = document.getElementById("searchBtn");
button.addEventListener('click', function() {
  //get value from input
  var player = document.getElementById("playerSearched").ariaValueMax;

  var url = "";

    fetch(url)
      .then((response) => {
        return (response.json());
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("Player", data.player);

        var results = document.getElementById("results");
      })
})

//store value of input 
// let playerName = $("#searchTerm").val();

// $("#searchTerm").keypress(function(event){
//   if (event.which === 13) {
//     event.preventDefault();
//     $("#searchBtn").click();
//   }
// });

// $("#searchBtn").on("click", function() {

//   // get the input from the user
//   playerName = $("#searchTerm").val();

//   // clears input box
//   $("#searchTerm").val("");