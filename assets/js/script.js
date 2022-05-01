console.log("JS test");

// create array to hold searches for saving
var search = [];

var searchHandler = function (event) {
    event.preventDefault();
    var searchInput = document.querySelector("input[name='search']").value;
    //var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    // check if inputs are empty (validate)
    if (!searchInput) {
      alert("You forgot to type in here!"); // HOW TO MAKE THIS A MODAL?
      return false;
    }
  
    // reset form fields for next search to be entered
    document.querySelector("input[name='search']").value = "";
};

var saveSearch = function () {
    localStorage.setItem("search", JSON.stringify(search));  
}

var loadSearch = function() {
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


// create delete button
var deleteButtonEl = document.createElement("button");
     deleteButtonEl.textContent = "Delete";
     deleteButtonEl.className = "btn delete-btn";
     deleteButtonEl.setAttribute("data-task-id", taskId);
     actionContainerEl.appendChild(deleteButtonEl);

;


loadSearch();
