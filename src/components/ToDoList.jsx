import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ( props ) => {
    return (
        <div>
            {
                props.todos.map(item => 
                    <ToDoItem 
                        todo={item} 
                        key={item.id}
                        setComplete={props.setComplete}
                        onRemoveClick={props.onRemoveClick}  
                    />
                )
            }
        </div>
    );
};

export default ToDoList;