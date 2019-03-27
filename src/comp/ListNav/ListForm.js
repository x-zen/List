import React from "react";
import { connect } from 'react-redux';

import { addList } from '../../actions'

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      description: "",
      dueDate: "",
      isAddingList: false
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addList = e => {
    e.preventDefault();
    const list = {
      id: this.state.id,
      title: this.state.name,
      description: this.state.age,
      dueDate: this.state.height
    };
    this.props.submit(list);
    this.setState({
      id: null,
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.addList}>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChanges}
          />
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChanges}
          />
          <input
            name="dueDate"
            type="text"
            value={this.state.dueDate}
            onChange={this.handleChanges}
          />
          <button className="btn">Add Item</button>
        </form>
      </div>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    lists: state.lists,
    isAddingLists: state.isAddingList
  };
};

export default connect(
  mapStateToPops,
  { addList }
)(ListForm);
