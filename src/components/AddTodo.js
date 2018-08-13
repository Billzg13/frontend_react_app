import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions'
import { getAuthors } from '../actions/authorActions'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            body:'',
            authorId:1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.authorId !== 1 ){
            const newTodo = {
                body:this.state.body,
                authorID:this.state.authorId
            }
            console.log(newTodo);
            this.props.addTodo(newTodo);
        }else{
            let { authors } = this.props.author
            const newTodo = {
                body:this.state.body,
                authorID:authors[0]._id
            }
            this.props.addTodo(newTodo);
            alert('authors ID is '+authors[0]._id);
        }
    }

    handleChangeSelect(event){
        this.setState({authorId: event.target.value});
    }

    componentDidMount(){
        this.props.getAuthors();
    }

  render() {
    const { authors } = this.props.author
    console.log(authors);
    //i have all the aauthors here now i need to add em in select****
    const authorSelect = authors.map(author => {
        return(
            <option key= {author._id} value={author._id}> {author.name}</option>
        );
    }) 
    return (
        <div>
            <h1>ADD TODO BITSH </h1>
            <form onSubmit={this.handleSubmit}>
                <div className = "form-group">
                    <label className = "labels">
                        Name:
                        <input 
                        className="form-control form-control-lg"
                        type="text" 
                        name ="body" 
                        value={this.state.body} 
                        onChange={this.handleChange} />
                    </label>
                    <div className = "form-group">
                        <select 
                        onChange = {this.handleChangeSelect}>
                            {authorSelect}
                        </select>
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    todo: state.todo,
    author: state.author //get authors for select 
});


export default connect(mapStateToProps, { addTodo, getAuthors })( AddTodo );

/*
<select
                        value = {this.state.value} 
                        onChange = {this.handleChangeSelect}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>

*/