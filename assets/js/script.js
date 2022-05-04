console.log("js test");

//store value of input 
let game = $("#searchTerm").val();

$("#searchTerm").keypress(function(event){
  if (event.which === 13) {
    event.preventDefault();
    $("#searchBtn").click();
  }
});

$("#searchBtn").on("click", function() {

  // get the input from the user
  game = $("#searchTerm").val();

  // clears input box
  $("#searchTerm").val("");

  // Full API call to SportsScore: Get a list of teams belonging to a specified sport. 
  //Returns a list of teams
  const settings = {
	  "async": true,
  	"crossDomain": true,
	  "url": "https://sportscore1.p.rapidapi.com/sports/1/teams?page=1",
	  "method": "GET",
  	"headers": {
  		"X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  		"X-RapidAPI-Key": "92d5a261cbmsh2670c43e09e3d07p15f894jsn89c9d2e082a5"
	  }
  };

  $.ajax(settings).done(function (response) {
	  console.log(response);
  });
 
  function getEvents () {
    // API call to SeatGeek
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://seatgeek-seatgeekcom.p.rapidapi.com/events",
      "method": "GET",
      "headers": {
        "X-RapidAPI-Host": "seatgeek-seatgeekcom.p.rapidapi.com",
        "X-RapidAPI-Key": "92d5a261cbmsh2670c43e09e3d07p15f894jsn89c9d2e082a5"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    let results = response.list;
    console.log(results);

  }
});




















// practice stuff
// // create array to hold searches for saving
// var gameTitle = [];

// // Save game title search to local storage
// localStorage.setItem("gameTitle", response.name);

// // Function to display the last game title search
// function init() {
//   gameTitle = localStorage.getItem("gameTitle")
// }

// function searchButton() {
//   gameTitle = $("input").val().trim();

//   // Buttons are created as the user enters more games
//   var gameList = $("<button>");
//   gameList.addClass("list-group-item list-group-item-action")
//   gameList.text(gameTitle);

//   // Adding buttons to sidebar
//   $("ul").prepend(gameList);
//   // Clear out input field
//   $("input").val("");

//   // API CALL FUNCTION ---> getGame()
// }

// init();

// // Submit event for when the user enters the game title
// $("#game-form").submit(function (event){
//   event.preventDefault();
//   searchButton();
// })























// Dont mind this
// search[0] = "";
// localStorage.setItem("search", JSON.stringify(search));
// var storedSearches = JSON.parse (localStorage.getItem("search"));

// var searchHandler = function (event) {
//     event.preventDefault();
//     var searchInput = document.querySelector(".uk-form-label").value;
//     buttonEl.addEventListener("click", function(){
     
//     localStorage.setItem("search", JSON.stringify(searchInput));  
//      // check if inputs are empty (validate)
//     if (!searchInput) {
//       alert("You forgot to type in here!"); // HOW TO MAKE THIS A MODAL?
//       return false;
//     }
  
//     })
    
//     // reset form fields for next search to be entered
//     document.querySelector(".uk-form-label").value = "";
// };


// var loadSearch = function() {
//     var savedSearch = localStorage.getItem(search);
//     // if there are no search results, set searches to an empty array and return out of the function
//     if (!savedSearch) {
//       return false;
//     }
//     console.log("Saved searches found!");
//     // else, load up saved searches
  
//     // parse into array of objects
//     savedSearch = JSON.parse(search);
  
//     // loop through savedSearch array
//     for (var i = 0; i < savedSearch.length; i++) {
//       // pass each task object into the function
//       createSearchEl(savedSearch[i]);
//     }
// };


// create delete button
// var deleteButtonEl = document.createElement("button");
//      deleteButtonEl.textContent = "Delete";
//      deleteButtonEl.className = "btn delete-btn";
//      deleteButtonEl.setAttribute("data-task-id", taskId);
//      actionContainerEl.appendChild(deleteButtonEl);

// ;

