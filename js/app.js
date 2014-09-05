//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompletedTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-task
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task
var addTask = function() {
  console.log("Add Task")
    //when the button is pressed
  //create a new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each of these elements will need to be modified and appended
}

//Edit an existing task
var editTask = function() {
  console.log("edit Task")
  //when the edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text become the input value
    //else
      //switch to .editMode
      //input value becomes the label's text

    //Toggle .editMode on the parent

}

var deleteTask = function() {
  console.log("delete Task")
  //Delete an existing task
  //When the delete button is pressed
    //Remove the parent li from the parent ul

}

var taskCompleted = function () {
    console.log("complete Task")
    //Mark a task as complete
  //When the checkbox is checked
    //Append the task list item to #completed-tasks

}

var taskIncomplete = function() {
  console.log("incomplete Task")
  //Mark a task as incomplete
  //When the checkbox is unchecked
    //Append task to #incomplete-tasks

}

//set the click handler to the add task function
