import React from 'react';
import ToDoItem from './TodoItem';

const TodoList = ({ todos, setComplete, onRemoveClick }) => {
    return (
        <div className="list-container">
            {
                todos.map(item => 
                    <ToDoItem 
                        todo={item} 
                        key={item.id}
                        setComplete={setComplete}
                        onRemoveClick={onRemoveClick}  
                    />)
            }
        </div>
    );
};

export default TodoList;