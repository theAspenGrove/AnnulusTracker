import { useState } from 'react';

export default function ToDoItem({modifyTask, modifyStatus, toDoListItem}) {
    const [showMore, setShowMore] = useState(false);

    const TaskItem = ({toggle}) => {
        return (
            <>
                <div className="ToDoItemTask"><a contentEditable="true" onBlur={e => modifyTask(toDoListItem.id,e.currentTarget.textContent)}>{toDoListItem.task}</a></div>
                <div className="ToDoItemStatus"><a contentEditable="true" onBlur={e => modifyStatus(toDoListItem.id,e.currentTarget.textContent)}>{toDoListItem.status}</a></div>
                <div className="quickDoneButton">
                    <button onClick={() => modifyStatus(toDoListItem.id,"Done")}>✔</button> 
                    <button onClick={() => setShowMore(toggle)}>...</button> 
                </div>
            </>
            )
    }

    if (showMore) {
        return (
            <>
            <div className="TodoListItem">
                <div className="TaskRow">
                    <TaskItem toDoListItem={toDoListItem} toggle={false}/>
                </div>
                <div className="TaskRow">
                    <StatusButtons modifyStatus={modifyStatus} id={toDoListItem.id}/>
                </div>
            </div>
            
            </>
        );
    } else {
        return (
            <>
            <div className="TodoListItem">
                <div className="TaskRow">
                    <TaskItem toDoListItem={toDoListItem} toggle={true}/>
                </div>
            </div>
            </>
        );
    }
};


const StatusButtons = ({ modifyStatus, id }) => {
    return (
        <>
            {/* when the user clicks on a button, call the modifyStatus function and pass the id of the task and the new status as arguments */}
            {/* todo make better buttons */}
            <div className="TaskStatusButtons">
                <button onClick={() => modifyStatus(id,"Done")}>Done</button>
                <button onClick={() => modifyStatus(id,"ToDo")}>To Do</button>
                <button onClick={() => modifyStatus(id,"In Progress")}>In Progress</button>
                <button onClick={() => modifyStatus(id,"Missed :'(")}>Missed</button>
            </div>
        </>
    )
}