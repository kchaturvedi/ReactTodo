let React = require('react')
let ReactDOM = require('react-dom')
let TestUtils = require('react-addons-test-utils')
let expect = require('expect')
let $ = require('jQuery')

let TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })
  
  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'test text'
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    
    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText)
    
    expect(todoApp.state.todos[0].text).toBe(todoText)
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  })
  
  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})
    
    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  })
  
  it('should toggle todo from completed to incompleted', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})
    
    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(false)
    expect(todoApp.state.todos[0].completedAt).toNotExist()
  })
})