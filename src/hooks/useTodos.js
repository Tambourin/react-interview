import { useState } from 'react';

const useTodos = (initialTodos) => {
    const [ todos, setTodos ] = useState(initialTodos);

    const generateNewId = () => {
        return todos.length + 1;
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