import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAuthor } from '../actions/authorActions';

class AddAuthor extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('hai from onsubmit name is: '+this.state.name)
    const newAuthor = {
      name:this.state.name
    }
    this.props.addAuthor(newAuthor);
  }

  render() {

    return (
      <div className = "container" >
        <form onSubmit={this.onSubmit}>
          <div className = "form-group">
            <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            />
          </div>
          <input type="submit" className="btn btn-info btn-block mt-4" />     
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  author:state.author
});



export default connect(mapStateToProps, { addAuthor })( AddAuthor );