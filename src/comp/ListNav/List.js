import React from 'react';

const List = props => {
  return (
    <div className="">
      <div className='list-head'>
        <h2>{props.title}</h2>
      </div>

      <div>
        <p>{props.description}</p>
        <h4>{props.dueDate}</h4>
      </div>

      <div className='list-form'>

      </div>
    </div>
  );
};

export default List;
