
// Create Empty Grocery List Array
var groceryList = []



// ADD A NEW GROCERY ITEM

function addNew (){
    var newItem = prompt("What item would you like to add to your grocery list?");
    groceryList.push(newItem)
}




// REMOVE GROCERY ITEM

function remove(){
    var remItem = prompt("What item would you like to remove from your grocery list?");
    var index = roster.indexOf(remItem);
    roster.splice(index,1)
  }



// DISPLAY GROCERY LIST

// Create a function called display that prints out the grocery list to the console.
function display(){
    console.log(groceryList);
}

// Start by asking if they want to use the web app

var start = prompt("Welcome to Making Groceries. Would you like to start the list web app? y/n");
var request = "empty";

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

if (start === 'y'){
    while(request !== "quit") {
        request = prompt("Please select an action: add, remove, display, or quit")
        if (request === "add") {
            addNew();
        } else if (request === "remove") {
            remItem();
        } else if (request ==- "display") {
            display();
        }
    }
}

alert("Thanks for using Making! Please refresh the page to start over.")
