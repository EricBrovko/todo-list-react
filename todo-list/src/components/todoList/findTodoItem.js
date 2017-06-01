import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, FormControl, Form } from 'react-bootstrap';

class findTodoItem extends Component {
  findTask(event) {
    event.preventDefault();
    this.props.onFindTask(this.searchInput.value);
  }

  render() {
    return (
      <Form onSubmit={this.findTask.bind(this)} className="row create-form">
        <div className="col-sm-1"></div>
        <div className="col-sm-9">
          <FormControl
                 type="text"
                 className="form-control"
                 placeholder="What do I need to find?"
                 inputRef={(input) => { this.searchInput = input }} />
        </div>
        <div className="col-sm-2">
          <Button type="submit" bsStyle="primary">
            <span className="glyphicon glyphicon-search"></span>
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect(
  store => ({}),
  dispatch => ({
    onFindTask: (searchValue) => {
      dispatch({ type: 'FIND_TASK', searchValue })
    }
  })
)(findTodoItem);
