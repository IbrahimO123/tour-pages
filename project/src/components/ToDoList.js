import React, { useEffect, useState } from 'react';
import {MdDelete} from 'react-icons/md';

function ToDoList() {
    const toDo = {
        task: " Send the monthly transactions to Customers",
        details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
        date: "2021-07-30",
        status: "Open",
        priority: "Very Low",
        comment: "Copy the executives while sending the email"
    }
    const [actionLog, setAction]= useState([]);
    const [tasking,setTask] = useState(toDo.task);
    const [details,setDetails] = useState(toDo.details);
    const [date,setDate] = useState(toDo.date);
    const [status,setStatus] = useState(toDo.status);
    const [priority,setPriority]= useState(toDo.priority);
    const [comment,setComment]= useState(toDo.comment);
    useEffect(() => {
        setAction([
            ...actionLog,
            {
               task: " Send the monthly transactions to Customers",
               details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
               date: "2021-07-30",
               status: "Open",
               priority: "High",
               comment: "no comments is available",
            }
        ])  
        },[tasking, date, status])

    const changeTask = (e) => {setTask(e.target.value)}
    const changeDetails = (e) => {setDetails(e.target.value)}
    const changeDate = (e) => {setDate(e.target.value)}
    const changeStatus = (e) => {setStatus(e.target.value)}
    const changePriority = (e) => {setPriority(e.target.value)}
    const changeComment = (e) => {setComment(e.target.value)}
    const addTask = () => {
        if (tasking && details && date) {
        setAction([
            ...actionLog,
            {
                task:tasking,
                details:details,
                date:date,
                status:status,
                priority:priority,
                comment:comment,
            }
            
        ])
        setTask('')
        setDetails('')
        setDate('')
        setComment('')
        }
        else {
            alert('Fill in the task or details input, also set the date')
        }
        
    }
     
    //const aray = [23,45,67,78,96,77]
    //const filer = aray.filter((a,b) => b !== 4)
    //console.log(filer)
    const deleteTask = () => {
        let del = document.querySelectorAll(".del");
        console.log(del)
       for (let i=0; i < del.length; i++) {
           let btn = del[i];
           btn.addEventListener("click",(e)=>{
               btn.parentElement.parentElement.remove();   
              console.log('clicked') ;
           })
       }
    }

    return (
        <>
        <div className="todo" >
        <p className="task-heading" >Task To Do</p>
        <p  className="task-box">
            <label className="task-label">Tasks:</label>
            <input className="task-input" type="text" required placeholder="Task to do" value={tasking} onChange={(e) => changeTask(e)} tabIndex="1"></input>
        </p>
        <p className="task-box">
         <span className="task-label">Details:</span>
         <textarea className="task-input task-area" required value={details} onChange={(e) => changeDetails(e)} placeholder="Details about the task" >
         </textarea>  
        </p>
        <p className="task-box">
            <label className="task-label">Date:</label>
            <input className="task-input" type="date" required onChange={(e) => changeDate(e)}  value={date} tabIndex="3"></input>
        </p>
        <p className="task-box">
            <label className="task-label" htmlFor="status">Status:</label>
            <select className="task-input" type="text"  name="status" id="status" value={status} onChange={(e) => changeStatus(e)} required  tabIndex="4">
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Delay">Delay</option>
                <option value="Over Due">Over Due</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        </p>
        <p className="task-box">
            <label className="task-label" htmlFor="priority">Priority:</label>
            <select className="task-input" required value={priority} onChange={(e) => changePriority(e)} type="text" placeholder="Importance level" list="priority" name="priority" id="priority" tabIndex="5">
            <option value="Very Low">Very Low</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
        </p>
        <p className="task-box">
            <label className="task-label">Comment:</label>
            <input className="task-input" type="text" required placeholder="Add comment" value={comment} onChange={(e) => changeComment(e)}  tabIndex="6"></input>
        </p>
        <p className="task-button">
            <button type="submit" onClick={addTask} className="task-button">Add Task</button>
        </p>
        </div>
        <div className="table">
                  <table className="task-table">
                     <thead>
                     <tr className="task-heading">
                                <th>Task</th>
                                <th>Details</th>
                                <th>Date</th>
                                <th id="stat" >Status</th>
                                <th id="prior" >Priority</th>
                                <th>Comment</th>
                              </tr>
                     </thead>                     
           { 
               
               actionLog.map((action,serial) => 
               (
                            <tbody className="task-body" id="task-body" key={serial}>
                            <tr>
                                <td><button className="del" onClick={deleteTask} id="delete" ><MdDelete/></button>{action.task}</td>
                                <td>{action.details}</td>
                                <td>{action.date} </td>
                                <td>{action.status} </td>
                                <td>{action.priority}</td>
                                <td>{action.comment}</td>
                                
                              </tr>
                            </tbody>  
            )
            )
        }
        </table>
        </div>
        </>
    )
}

export default ToDoList

