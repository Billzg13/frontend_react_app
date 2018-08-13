import React, { Component } from 'react'
import TodoList from './TodosList'
import {Link} from 'react-router-dom'

class TodosComponent extends Component {
  render() {
    return (
      <div className ="container">
        <TodoList/>
        <hr/>
        <div className="col-md-12 text-center">
          <Link to="/add_todo" className="btn btn-lg btn-info mr-2">
            Add Todo
          </Link>
        </div>
      </div>
    )
  }
}
export default TodosComponent;