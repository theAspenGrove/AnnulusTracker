import { useState } from 'react';

export default function List(){
    const [ toDoList, setToDoList ] = useState([{id: 0, task:"Do the dishes", status:"todo"}, {id:1, task:"Do the laundry", status:"todo"}, {id:3, task:"Do the yard work", status:"todo"}]);

    //add a task to the active list by creating a copy of the current list, adding the new task, and setting the new list as the current list
    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, {id:toDoList.length + 1, task:userInput, status:"todo" }];
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
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the list and create a table row for each task */}
                    {toDoList.map(toDoListItem => (
                        <tr>
                            <td>
                                {toDoListItem.task}
                            </td>
                            <td>
                                {toDoListItem.status}
                            </td>
                            <td>
                                {/* pass the modifyStatus function and the id of the task to the StatusButtons component} */}
                                {/* todo make better buttons */}
                                <StatusButtons modifyStatus={modifyStatus} id={toDoListItem.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

const StatusButtons = ({ modifyStatus, id }) => {
    return (
        <>
            {/* when the user clicks on a button, call the modifyStatus function and pass the id of the task and the new status as arguments */}
            {/* todo make better buttons */}
            <button onClick={() => modifyStatus(id,"ToDo")}>To Do</button>
            <button onClick={() => modifyStatus(id,"In Progress")}>In Progress</button>
            <button onClick={() => modifyStatus(id,"Done")}>Done</button>
            <button onClick={() => modifyStatus(id,"Missed :'(")}>Missed</button>
        </>
    )
}