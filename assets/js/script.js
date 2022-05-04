console.log("js test");

//store value of input 
let playerName = $("#searchTerm").val();

$("#searchTerm").keypress(function(event){
  if (event.which === 13) {
    event.preventDefault();
    $("#searchBtn").click();
  }
});

$("#searchBtn").on("click", function() {

  // get the input from the user
  playerName = $("#searchTerm").val();

  // clears input box
  $("#searchTerm").val("");



















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
//   playerName = $("input").val().trim();

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

