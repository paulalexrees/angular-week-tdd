describe('Todos tracker', function(){
  it('has a title', function(){
    browser.get('/')
    var todo = $('#todo')
    expect(todo.getText()).toEqual('ToDo1')
  });
});
