describe('ToDoController', function(){

  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoController');
  }));

  it('initialises with a toDo', function() {
    var todos = [{text: "ToDo1", completed: true},{text: "ToDo2", completed: false}];
    expect(ctrl.todos).toEqual(todos);
  });

  it('can add todos', function() {
    ctrl.addToDo();
    expect(ctrl.todos.length).toEqual(3);
  });

  it('can delete todos', function() {
    ctrl.deleteToDo();
    expect(ctrl.todos.length).toEqual(1);
  });


});
