toDoApp.controller('ToDoController', ["ToDoFactory", function(ToDoFactory) {
  var self = this;

  this.todos = [new ToDoFactory("ToDo1", true), new ToDoFactory("ToDo2")];

  self.addToDo = function(todoText) {
    self.todos.push({text: todoText, completed: false});
  };

  self.removeToDo = function(todoIndex) {
    self.todos.splice(todoIndex, 1);
  };
}]);
