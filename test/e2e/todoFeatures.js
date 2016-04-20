describe('Todos tracker', function(){
  it('starts with two ToDo', function(){
    browser.get('/')
    var todos = $$('#todos p')
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });

  it('can add a ToDo', function(){
    browser.get('/');
    $('#new-todo-name').sendKeys("NewToDo");
    $('#add-todo').click();

    var todo = $$('#todos p').last().getText();
    expect(todo).toEqual('NewToDo: not completed');
  });

  it('can remove a ToDo', function() {
    browser.get('/');
    $$('#remove-todo').first().click();

    var todo = $$('#todos p').first().getText();
    expect(todo).toEqual('ToDo2: not completed');
  });

  it('can mark items as complete', function(){
    browser.get('/');
    $$('input[type="checkbox"]').last().click();

    var todo = $$('#todos p').last().getText()
    expect(todo).toEqual('ToDo2: completed')
  });
});
