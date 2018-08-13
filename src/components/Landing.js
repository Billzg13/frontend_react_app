import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">My bad app</h1>
                <p className="lead">
                {' '}
                  This is a bad app i made to learn react and node
                </p>
                <p className="lead">
                {' '}
                  This app is made with react for front end and node(expressjs) back end
                </p>
                <hr />
                <Link to="/authors" className="btn btn-lg btn-info mr-2">
                  Authors
                </Link>
                <Link to="/todos" className="btn btn-lg btn-light">
                  Todos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;