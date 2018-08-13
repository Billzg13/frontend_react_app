import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/todoActions';

class TodoList extends Component {

    componentDidMount(){
        console.log('i am in componentDidmount in todos')
        this.props.getTodos();
    }
    handleClick(_id){
        console.log('hai from button id is: '+_id)
        this.props.deleteTodo(_id)
    }

  render() {
        console.log('i am in render in todos')
        const { todos } = this.props.todo;
        console.log({todos});
        
        const todoItemss = todos.map(( todo ) => {
            return(
                <li className = "list-group-item d-flex justify-content-between align-items-center" key={ todo._id }>
                    { todo.body }
                    <button className = "btn btn-danger" onClick = {this.handleClick.bind(this, todo._id)}>
                        x
                    </button>  
                </li>
            );
        })
        
    return (
        <div className = "container">
            <h1>hai from todolist </h1>
            <ul className = "list-group">
                {todoItemss}
            </ul>

        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    todo : state.todo
})

export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList);