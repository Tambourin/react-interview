import React from 'react';
import ok from '../static/completed-yes.svg';
import no from '../static/completed-not.svg';
import trashBin from '../static/lightbin.svg';

const ToDoItem = ( props ) => {  
    var text;

    if (props.todo.complete === true) {
        text = 'Complete';
    } else {
        text = 'Mark ready';
    }

    return (
        <div className={`todo-item ${props.todo.complete && "complete"}`} >
            <p>{props.todo.name}</p>
            <button
                className={`btn ${props.todo.complete && "btn-complete"}`}             
                onClick={() => props.setComplete(props.todo.id)}
            >
            <img src={props.todo.complete ? ok : no} alt="Mark ready" />              
            </button>
            <button
                className="btn btn-trashbin"
                onClick={() =>
                    props.onRemoveClick(props.todo.id)
                }
            >
              
              <img src={trashBin} alt="Remove from list" />
            </button>
        </div>
    );
};

export default ToDoItem;