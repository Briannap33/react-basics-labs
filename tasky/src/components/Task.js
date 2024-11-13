import React from 'react';

const Task = (props) => {
    let priorityColor;

    switch(props.priority){
        case "low":
            priorityColor = "#00796b";  
            break;
          case "medium":
            priorityColor = "#ffa000"; 
            break;
          case "high":
            priorityColor = "#d32f2f"; 
            break;
          default:
            priorityColor = "#5bb4c4"; 
      }

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <p className="priority" style={{color: priorityColor}}>Priority: {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
};
export default Task;
