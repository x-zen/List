import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions';

import './Auth.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    });
  }

login = e => {
  e.preventDefault();
  this.props.login(this.state.credentials)
    .then(() => {
      this.props.history.push('/list/:userId')
    })
}

  render() {
    return (
      <div className='cont'>
         <div className='box'>
           <h2>Please Log In</h2>
           <hr className='hr' />
           <form onSubmit={this.login}>
             <h3>Username</h3>
             <input
               type='text'
               name='username'
               value={this.state.credentials.username}
               onChange={this.handleChange}
             />
             <h3>Password</h3>
             <input
               type='password'
               name='password'
               value={this.state.credentials.password}
               onChange={this.handleChange}
             />
             <button>Log in!</button>
           </form>

           <p>Not a member? Register <a href='/signup'>here</a></p>
         </div>
       </div>
    )
  }
}

export default connect(
  null,
  { login }
)(Login);
