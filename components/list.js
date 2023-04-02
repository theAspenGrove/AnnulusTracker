import { useState } from 'react';
export default function List(){
    const [ toDoList, setToDoList ] = useState([{id: 0, task:"Do the dishes", status:"todo"}, {id:1, task:"Do the laundry", status:"todo"}, {id:3, task:"Do the yard work", status:"todo"}]);

    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, {id:toDoList.length + 1, task:userInput, status:"todo" }];
        setToDoList(copy);
    }
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
                {toDoList.map(toDoListItem => (
                    <tr>
                        <td>
                        {toDoListItem.task}
                        </td>
                        <td>
                        {toDoListItem.status}
                        </td>
                        <td>
                            <StatusButtons modifyStatus={modifyStatus} id={toDoListItem.id}/>
                        </td>
                    </tr>
                ))}
            </table>
            <ToDoForm addTask={addTask}/>
        </>
    )
}

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

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
            <button onClick={() => modifyStatus(id,"ToDo")}>To Do</button>
            <button onClick={() => modifyStatus(id,"In Progress")}>In Progress</button>
            <button onClick={() => modifyStatus(id,"Done")}>Done</button>
            <button onClick={() => modifyStatus(id,"Missed :'(")}>Missed</button>
        </>
    )
}