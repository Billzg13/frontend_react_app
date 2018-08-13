import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAuthor } from '../actions/authorActions';

class AuthorsTodo extends Component {
  
  
  componentDidMount(){
    
    this.props.getAuthor(this.props.match.params);
  }

  render() {
    const { author } = this.props.author;
    console.log(author);
    if (author === undefined){
      return ( <div> whats up </div>);
    }else{
      const AuthorTodoList = author.map((todo) => {
        return(
          <li className = "list-group-item d-flex justify-content-between align-items-center"
          key = {todo._id}>

            {todo.body}
            <span className="badge badge-primary badge-pill">
              x
            </span>
          </li>
        );
      })
      return (
        <div>
          Todos:
          <br/>
          {AuthorTodoList}
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => ({
  author : state.author
})

export default connect(mapStateToProps, { getAuthor })(AuthorsTodo);