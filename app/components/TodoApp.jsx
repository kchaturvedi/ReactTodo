let React = require('react')
let uuid = require('node-uuid')
let moment = require('moment')

let TodoList = require('TodoList')
let AddTodo = require('AddTodo')
let TodoSearch = require('TodoSearch')
let TodoAPI = require('TodoAPI')

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate(prevProps, prevState) {
    TodoAPI.setTodos(this.state.todos)
  },
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        todo.completedAt = todo.completed ? moment().unix() : undefined
      }
      
      return todo
    })
    
    this.setState({
      todos: updatedTodos
    })
  },
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render() {
    let {todos, showCompleted, searchText} = this.state
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

module.exports = TodoApp
