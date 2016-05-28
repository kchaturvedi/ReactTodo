let React = require('react')
let ReactDOM = require('react-dom')
let TestUtils = require('react-addons-test-utils')
let expect = require('expect')
let $ = require('jQuery')

import * as actions from 'actions'
import {Todo} from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })
  
  it('should dispatch TOGGLE_TODO action on click', () => {
    let todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    }
    let action = actions.startToggleTodo(todoData.id, !todoData.completed)
    
    let spy = expect.createSpy()
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(todo))
    
    TestUtils.Simulate.click($el[0])
    
    expect(spy).toHaveBeenCalledWith(action)
  })
})
