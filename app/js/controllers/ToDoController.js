toDoApp.controller('ToDoController', [function() {
  var vm = this;

  this.todos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  vm.addToDo = function(todoText) {
    vm.todos.push({text: todoText, completed: false});
  };

  vm.removeToDo = function(todoIndex) {
    vm.todos.splice(todoIndex, 1);
  };
}]);
