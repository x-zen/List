import React from "react";

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      description: "",
      dueDate: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // if (this.state.id) {
    const item = {
      id: this.state.id,
      title: this.state.name,
      description: this.state.age,
      dueDate: this.state.height
    };
    this.props.submit(item);
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
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChanges}
          />
          <input
            name="description"
            type="text"
            value={this.state.age}
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

export default ListForm;
