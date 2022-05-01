// create array to hold searches for saving
var search = [];

var saveSearch = function () {
    localStorage.setItem("search", JSON.stringify(search));  
}

var loadsearch = function() {
    var savedSearch = localStorage.getItem("search");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedSearch) {
      return false;
    }
    console.log("Saved searches found!");
    // else, load up saved searches
  
    // parse into array of objects
    savedSearch = JSON.parse(savedSearch);
  
    // loop through savedSearch array
    for (var i = 0; i < savedSearch.length; i++) {
      // pass each task object into the `createTaskEl()` function
      createTaskEl(savedSearch[i]);
    }
  };
  