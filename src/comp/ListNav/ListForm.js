import React from "react";
import { connect } from 'react-redux';

import { addList } from '../../actions'

import './list.css'

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: [
        {
          id: null,
          name: "",
          age: "",
          height: ""
        }],
      isAddingList: false
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addList = e => {
  e.preventDefault();
  this.props.addList(this.state.newList);
  this.setState({ newList: [
    {
      id: null,
      name: "",
      age: "",
      height: ""
    }
  ]
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
              value={this.state.title}
              onChange={this.handleChanges}
              placeholder='Title'
            />
            <h3>List Description</h3>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChanges}
              placeholder='List Description'
            />
            <h3>Due Date</h3>
            <input
              name="dueDate"
              type="text"
              value={this.state.dueDate}
              onChange={this.handleChanges}
              placeholder='MM/DD/YYYY'
            />
            <button className="btn">Add Item</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    lists: state.lists,
    isAddingList: state.isAddingList
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(ListForm);
