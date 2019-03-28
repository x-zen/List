import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdatingList: false
    };
  }

  deleteList = e => {
    e.preventDefault();
    this.props.deleteList(this.state.id)
  }

  render() {
    return (
      <div className="list">
        <div className='list-head'>
          <h2>{this.props.title}</h2>
        </div>
        <hr className='hr' />
        <div className='list-items'>
          <p>{this.props.description}</p>
          <p>Due: <span>{this.props.dueDate}</span></p>
        </div>

        <div className='list-actions'>
          <i onClick={this.deleteList} className="fas fa-eraser"></i>
          <i className="fas fa-edit"></i>
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
  {}
)(List);
