var React = require('react')
var TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    };
  },
  render() {
    let {todos} = this.state
    
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
})

module.exports = TodoApp
