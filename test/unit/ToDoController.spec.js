describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_
  }));

  it('initialises with several todos', function() {
    var todos = [new ToDoFactory("ToDo1", true), new ToDoFactory("ToDo2")];
    expect(ctrl.todos).toEqual(todos)
  });

  it('adds a new todo', function() {
    ctrl.addToDo('NewTodo');

    var todo = {text: "NewTodo", completed: false};
    expect(ctrl.todos.pop()).toEqual(todo);
  });

  it('removes a todo', function() {
    ctrl.removeToDo(0)

    var todo = new ToDoFactory("ToDo2");
    expect(ctrl.todos).toEqual([todo]);
  });
});
