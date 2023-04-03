import { useState } from 'react';

export default function ToDoItem({modifyStatus, toDoListItem}) {
    const [showMore, setShowMore] = useState(false);

    const TaskItem = ({toggle}) => {
        return (
            <>
                <div className="ToDoItemTask"><a onClick={() => setShowMore(toggle)}>{toDoListItem.task}</a></div>
                <div className="ToDoItemStatus"><a onClick={() => setShowMore(toggle)}>{toDoListItem.status}</a></div>
                <div className="quickDoneButton"><button onClick={() => modifyStatus(toDoListItem.id,"Done")}>✔</button> </div>
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
            <div>
                <button onClick={() => modifyStatus(id,"ToDo")}>To Do</button>
                <button onClick={() => modifyStatus(id,"In Progress")}>In Progress</button>
                <button onClick={() => modifyStatus(id,"Missed :'(")}>Missed</button>
            </div>
        </>
    )
}