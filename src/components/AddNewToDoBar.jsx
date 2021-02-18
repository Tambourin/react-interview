import React from 'react';

const AddNewTodoItemBar = (props) => {
  return (
    <form
        className="wrapper"
        style={{'grid-template-columns': '7fr 2fr'}}
        onSubmit={props.onSubmit}>
        <input
            placeholder="Add new todo"
            value={props.newTodoName}
            onChange={props.onInputChange}
        />
        <button
            className="btn btn-success"
            type="submit"
            value="Submit">
            Submit
        </button>
    </form>
  );
}

export default AddNewTodoItemBar;