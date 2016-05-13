let React = require('react')
let ReactDOM = require('react-dom')
let TestUtils = require('react-addons-test-utils')
let expect = require('expect')
let $ = require('jQuery')

let TodoList = require('TodoList')
var Todo = require('Todo')

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })
  
  it('should render one Todo component for each Todo item', () => {
    let todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }]
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
    
    expect(todosComponents.length).toBe(todos.length)
  })
  
  it('should render empty message if no todos', () => {
    let todos = []
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    let $el = $(ReactDOM.findDOMNode(todoList))
    
    expect($el.find('.container__message').length).toBe(1)
  })
})