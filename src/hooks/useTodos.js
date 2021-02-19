import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useTodos = (initialTodos) => {
    const [ todos, setTodos ] = useState(initialTodos);

    const generateNewId = () => {
        return uuidv4();
    };

    const setComplete = ( toDoId ) => {
        setTodos(todos.map(item => item.id === toDoId 
            ? {...item, complete: !item.complete} 
            : item
        ));
    };

    const addTodo = (newTodoName) => {    
        setTodos([...todos, {
            id: generateNewId(),
            name: newTodoName,
            complete: false
        }]);
    };

    const removeTodo = (todoId) => {
        setTodos(todos.filter(item => item.id !== todoId));
    };

    return { todos, setComplete, addTodo, removeTodo };
};

export default useTodos;