import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isEditing: false
        }
    }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td className="task-actions">
          <div className="btn-group" role="group">
            <button className="btn btn-success" onClick={this.onSaveClick.bind(this)}>
              <span className="glyphicon glyphicon-ok"></span>
            </button>
            <button className="btn btn-default" onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </div>
        </td>
      );
    }

    return (
      <td className="task-actions">
        <div className="btn-group" role="group">
          <button className="btn btn-default" onClick={this.onEditClick.bind(this)}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
          <button className="btn btn-danger"  onClick={this.onDeleteClick.bind(this, this.props)}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
      </td>
    );
  }

  renderTaskSection() {
    const { id, task, isCompleted } = this.props;

    if (this.state.isEditing) {
      return (
        <td className="task-actions">
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text"
                   className="form-control"
                   defaultValue={task}
                   ref={(input) => {
                    this.editInput = { input, id };
                   }}
            />
          </form>
        </td>
      );
    }

    return (
      <td className={`${isCompleted ? 'is-completed' : 'not-completed'} col-sm-10`}
          onClick={this.toggleTask.bind(this, this.props)}>{task}
      </td>
    );
  }

  toggleTask(props) {
    const itemProps = {
      id: props.id,
      task: props.task,
      isCompleted: !props.isCompleted
    };

    this.props.onToggleTask(itemProps)
  }

  onSaveClick(event) {
    event.preventDefault();
    this.props.onSaveTask(this.editInput);
    this.setState({ isEditing: false });
  }

  onDeleteClick(props) {
    this.props.onDeleteItem(props.id);
    this.setState({ isEditing: false });
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  render() {
    return (
      <tr className="task-row">
        { this.renderTaskSection() }
        { this.renderActionsSection() }
      </tr>
    );
  }
}

export default connect(
  store => ({}),
  dispatch => ({
    onToggleTask: (taskProps) => {
      dispatch({ type: 'TOGGLE_TASK', task: taskProps });
    },
    onSaveTask: (newTask) => {
      const value = newTask.input.value;
      const id = newTask.id;
      const saveProps = { value, id };
      dispatch({ type: 'SAVE_TASK', task: saveProps });
    },
    onDeleteItem: (itemId) => {
      dispatch({ type: 'DELETE_TASK', task: itemId });
    }
  })
)(TodoListItem);
