import { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function List(){
    const [ toDoList, setToDoList ] = useState([{id: 0, task:"Do the dishes", status:"ToDo"}, {id:1, task:"Do the laundry", status:"ToDo"}, {id:3, task:"Do the yard work", status:"ToDo"}]);

    //add a task to the active list by creating a copy of the current list, adding the new task, and setting the new list as the current list
    const addTask = (userInput ) => {
        let copy = [...toDoList];
        if(userInput === "") return;
        copy = [...copy, {id:toDoList.length + 1, task:userInput, status:"ToDo" }];
        setToDoList(copy);
    }

    //modify the status of a task by creating a copy of the current list, mapping through the list to find the task with the matching id, and setting the new status
    const modifyStatus = (id,newStatus) => {
    let mapped = toDoList.map(task => {
        return task.id === Number(id) ? { ...task, status:newStatus } : { ...task};
    });
    setToDoList(mapped);
    }

    return (
        <>
            {toDoList.map(toDoListItem => (
                <ToDoItem modifyStatus={modifyStatus} toDoListItem={toDoListItem}/>
            ))}
            {/* load the ToDo form component and pass the addTask function to it */}
            <ToDoForm addTask={addTask}/>
        </>
    )
}

const ToDoForm = ({ addTask }) => {
    //create a state variable to hold the user input
    const [ userInput, setUserInput ] = useState('');

    //update the state variable when the user types in the input field
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    //when the user submits the form, call the addTask function and pass the user input as an argument
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

