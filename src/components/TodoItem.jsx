import React from 'react';
import completedYes from '../static/completed-yes.svg';
import completedNot from '../static/completed-not.svg';
import trashBin from '../static/lightbin.svg';

const TodoItem = ({ todo, setComplete, onRemoveClick }) => {  

    const SetComleteButton = () => {
        return <button
            className={`btn ${todo.complete && "btn-complete"}`}             
            onClick={() => setComplete(todo.id)} >
            <img src={todo.complete 
                ? completedYes 
                : completedNot} alt="Switch complete" />              
        </button>
    };

    const RemoveButton = () => {
        return (
            <button
            className="btn btn-trashbin"
            onClick={() => onRemoveClick(todo.id)} >
            <img src={trashBin} alt="Remove from list" />
            </button>
        );
    };

    return (
        <div className={`todo-item ${todo.complete && "complete"}`} >
            <p>{todo.name}</p>
            <SetComleteButton />
            <RemoveButton />
        </div>
    );
};

export default TodoItem;