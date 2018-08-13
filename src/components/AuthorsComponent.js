import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import AuthorList from './AuthorList'


class AuthorsComponent extends Component {
  render() {
    return (
      <div className="container">
        <AuthorList/>
        <hr />
        <div className="col-md-12 text-center">
          <Link to="/add_author" className="btn btn-lg btn-info mr-2">
            Add author
          </Link>
        </div>

      </div>
    )
  }
}
export default AuthorsComponent;