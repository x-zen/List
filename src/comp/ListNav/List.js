import React from 'react';

import './list.css'

const List = props => {
  return (
    <div className="list">
      <div className='list-head'>
        <h2>{props.title}</h2>
      </div>
      <hr className='hr' />
      <div className='list-items'>
        <p>{props.description}</p>
        <h4>{props.dueDate}</h4>
      </div>

      <div className='list-form'>

      </div>
    </div>
  );
};

export default List;
