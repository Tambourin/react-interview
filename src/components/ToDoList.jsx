import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ( props ) => {
  return (
    <>
      {
        props.toDos.map(item => 
          <ToDoItem 
            todo={item} 
            key={item.id}
            onClick={() => console.log("Nappia painettu")}
            onRemoveClick={() => console.log("Nappia painettu")}  
          />
        )
      }
    </>
  );
};

export default ToDoList;