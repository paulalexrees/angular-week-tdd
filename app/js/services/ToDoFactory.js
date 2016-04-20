toDoApp.factory('ToDoFactory', function(){
  var ToDo = function(text, completed = false) {
    this.text = text
    this.completed = completed;
  };

  ToDo.prototype.complete = function(){
    this.completed = true;
  };

  return ToDo;
});
