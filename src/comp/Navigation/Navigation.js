import React from 'react';

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
          <p className='nav-item'>Home</p>
          <p className='nav-item'>My List</p>
          <p className='nav-item'>Sign In</p>
        </div>
      </div>
    );
  }
}

export default Navigation;
