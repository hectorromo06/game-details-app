console.log("js test");

var button = document.getElementById("searchBtn");
button.addEventListener('click', function() {
  //get value from input
  var player = document.getElementById("playerSearched").value;

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

//   // clears input box
//   $("#searchTerm").val("");