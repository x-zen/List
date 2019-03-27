import React from "react";
import { connect } from 'react-redux';

import { addList } from '../../actions'

import './list.css'

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: {
          title: "",
          description: "",
          dueDate: ""
        },
      isAddingList: false
    };
  }

  handleChanges = e => {
    this.setState({
      newList: {
      ...this.state.newList,
      [e.target.name]: e.target.value
      }
    });
  };

  addList = e => {
  e.preventDefault();
  this.props.addList(this.state.newList);
  this.setState({
    newList: {
      title: "",
      Description: "",
      dueDate: ""
    }
  });
};


  render() {
    return(
      <div className='list'>
        <div className='list-head'>
          <h2>Create a new list</h2>
        </div>

        <hr className='hr' />

        <div>
          <form onSubmit={this.addList}>
            <h3>Title</h3>
            <input
              name="title"
              type="text"
              value={this.state.newList.itle}
              onChange={this.handleChanges}
              placeholder='Title'
            />
            <h3>List Description</h3>
            <input
              name="description"
              type="text"
              value={this.state.newList.description}
              onChange={this.handleChanges}
              placeholder='List Description'
            />
            <h3>Due Date</h3>
            <input
              name="dueDate"
              type="text"
              value={this.state.newList.dueDate}
              onChange={this.handleChanges}
              placeholder='MM/DD/YYYY'
            />
            <button className="btn">Add List</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    newList: state.newList,
    isAddingList: state.isAddingList
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(ListForm);
