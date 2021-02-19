import React, { useState } from 'react';

const AddNewTodoItemBar = (props) => {
    const [ newTodoName, setTodoName ] = useState('');
    const [ error, setError ] = useState('');
 
    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoName.length > 3) {
            props.addTodo(newTodoName);
            setTodoName('');
        } else {
            setError('Name should be longer than 3 characters');
        }    
    };

    const onChangeName = (event) => {
        setError('');
        setTodoName(event.target.value);
    };

    return (
        <>
        <form
            className="add-new-todo-bar-container"            
            onSubmit={onSubmit}>
            <input
                placeholder="Add new todo"
                value={newTodoName}
                onChange={onChangeName}
            />
            <button
                className="btn btn-submit"
                type="submit"
                value="Submit">
                Submit                
            </button>            
        </form>
        <p className="error">{error}</p>
        </>
    );
};

export default AddNewTodoItemBar;