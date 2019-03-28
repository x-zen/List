import React from 'react';
import { connect } from 'react-redux';

import { readLists } from '../../actions';

import ListForm from './ListForm.js'
import List from './List.js';

import './list.css'

class ListNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      isGettingLists: false
    };
  }

  componentDidMount() {
    this.props.readLists();
  }

  render() {
    if (this.props.isGettingLists === true) {
      return (
        <div>
          <h2>Looking for Lists...</h2>
        </div>
      );
    }
    return (
      <div className='list-nav'>
        <div className='list-nav'>
          {this.props.lists.map(list => {
            return (
              <List
                id={list.id}
                title={list.title}
                description={list.description}
                dueDate={list.dueDate}
                completed={list.completed}
                key={list.id}
              />
            );
          })}
        </div>

        <div>
          <ListForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    lists: [
      ...state.lists
    ],
    isGettingLists: state.isGettingLists
  };
};

export default connect(
  mapStateToProps,
  { readLists }
)(ListNav);
