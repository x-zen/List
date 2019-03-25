import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from '../../actions';

import './Auth.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.credentials)
      .then(() => {
        this.props.history.push("/login")
      })
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return(
      <div className='cont'>
        <div className='box'>
          <h2>Register Here!</h2>
          <hr className='hr' />
          <form onSubmit={this.signup}>
            <h3>Username</h3>
            <input
              type='text'
              name='username'
              onChange={this.handleChange}
            />
            <h3>Password</h3>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
            />
            <button>Register!</button>
            </form>

            <p>Already a member? Sign in <a href='/login'>here</a></p>
          </div>
      </div>
    )
  }
}

export default connect(null, { signup })(SignUp);
