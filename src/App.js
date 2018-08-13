import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Footer from './components/Footers';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import AuthorsComponent from './components/AuthorsComponent';
import TodosComponent from './components/TodosComponent';
import AddAuthor from './components/AddAuthor';
import AddTodo from './components/AddTodo';
import AuthorsTodo from './components/AuthorsTodo';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <NavBar/>
            <Route exact path="/" component={Landing}/>
            <div className = "container" >
              <Route exact path="/authors" component = {AuthorsComponent} />
              <Route exact path="/todos" component = {TodosComponent} />
              <Route exact path="/add_author" component = {AddAuthor} />
              <Route exact path="/add_todo" component = {AddTodo} />
              <Route exact path="/authors/:id" component = {AuthorsTodo}/>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
