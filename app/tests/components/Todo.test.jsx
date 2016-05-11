let React = require('react')
let ReactDOM = require('react-dom')
let TestUtils = require('react-addons-test-utils')
let expect = require('expect')
let $ = require('jQuery')

let Todo = require('Todo')

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })
})