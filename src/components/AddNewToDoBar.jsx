import React, { useState } from 'react';

const AddNewTodoItemBar = (props) => {
  const [ newTodoName, setTodoName ] = useState("");
  const [ error, setError ] = useState("");
 
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoName.length > 3) {
      props.addTodo(newTodoName);
      setTodoName("");
    } else {
      setError("Name should be longer than 3 characters")
    }    
  }

  const onChangeName = (event) => {
    setError("");
    setTodoName(event.target.value);
  };

  return (
    <form
        className="wrapper"
        style={{'gridTemplateColumns': '7fr 2fr'}}
        onSubmit={onSubmit}>
        <input
            placeholder="Add new todo"
            value={newTodoName}
            onChange={onChangeName}
        />
        <button
            className="btn btn-success"
            type="submit"
            value="Submit">
            Submit
        </button>
        <p>{error}</p>
    </form>
  );
}

export default AddNewTodoItemBar;