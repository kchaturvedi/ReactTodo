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
})