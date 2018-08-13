import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthors, deleteAuthors } from '../actions/authorActions';
import { Link } from 'react-router-dom';

class AuthorList extends Component {

    componentDidMount(){
        console.log('i am in componentDidmount in authors')
        this.props.getAuthors();
    }
    handleClick(_id){
        console.log('hai from button click id is: '+_id)
        this.props.deleteAuthors(_id);
    }

    render() {
        console.log('i am in render in authors')

        const { authors } = this.props.author;
        console.log({authors});
        const authorItems = authors.map(( author ) => {
            return(
                <li className ="list-group-item d-flex justify-content-between align-items-center" key={ author._id } >
                <Link 
                to = {`/authors/${author._id}`}>
                    { author.name }
                </Link>
                <button className = "btn btn-danger" onClick = {this.handleClick.bind(this, author._id)}>
                x
                </button> 
                </li>
            );
        })
        return (
            <div className = "container">
                <h1>hai from authorList </h1>
                <ul className = "list-group">
                    { authorItems }
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    author : state.author
})

export default connect(mapStateToProps, { getAuthors, deleteAuthors })(AuthorList);