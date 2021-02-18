import React from 'react';
import '../App.css';
import useTodos from '../hooks/useTodos';
import AddNewTodoItemBar from './AddNewToDoBar';
import ToDoList from './ToDoList';

const App = () => { 
    const initialTodos = [
        {id: 1, name: 'Go to the supermarket', complete: false},
        {id: 2, name: 'Call Alice', complete: false},
        {id: 3, name: 'Ask Alice to call Bob', complete: false},
        {id: 4, name: 'Do the dishes', complete: false},
        {id: 5, name: 'Change car tyres', complete: false}
    ];

    const { todos, setComplete, addTodo, removeTodo } = useTodos(initialTodos);

    return (
        <div className="">
            <ToDoList 
                todos={todos} 
                setComplete={setComplete}
                onRemoveClick={removeTodo}
            />
            <AddNewTodoItemBar
                addTodo={addTodo}                                   
            />
        </div>
    );
  
}

export default App;
