import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className='nav'>
        <div className='nav-logo'>
          <h1>Listify</h1>
        </div>

        <div className='nav-links'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/list' className='nav-item'>My List</Link>
          <Link to='/login' className='nav-item'>Sign In</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
