describe('Todos tracker', function() {
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has two todos', function() {
    browser.get('/');
    var todos = $$(('#todo p'));
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });

  it('lets you add a todo', function() {
    browser.get('/');
    $('#new-todo-name').sendKeys("NewToDo");
    $('#addtodo').click();
    var todos = $$(('#todo p'));
    expect(todos.last().getText()).toEqual('NewToDo: not completed');
  });

  it('lets you delete a todo', function() {
    browser.get('/');
    $('#deletetodo').click();
    var todos = $$(('#todo p'));
    expect(todos.last().getText()).toEqual('ToDo1: completed');

  });

});
