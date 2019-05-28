import React from 'react';
import { connect } from 'react-redux';

import { deleteList } from '../../actions';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.deleteList.bind(this);
    this.state = {
      isUpdatingList: false,
      isRemovingList: false
    };
  }

  deleteList = (e, list) => {
    e.preventDefault();
    this.props.deleteList(this.props.id)
  }

  render() {
    return (
      <div className="list">
        <div className='list-head'>
          <h2>{this.props.title}</h2>
          <p>delete later</p>
          <p>delete later</p>
          <p>delete later</p>
        </div>
        <hr className='hr' />
        <div className='list-items'>
          <p>{this.props.description}</p>
          <p>Due: <span>{this.props.dueDate}</span></p>
        </div>

        <div className='list-actions'>
          <i
            onClick={this.deleteList}
            className="fas fa-eraser"
          ></i>
          <i
            className="fas fa-edit"
          ></i>
        </div>
      </div>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    isUpdatingLists: state.isUpdatingLists
  };
};

export default connect(
  mapStateToPops,
  {deleteList}
)(List);
