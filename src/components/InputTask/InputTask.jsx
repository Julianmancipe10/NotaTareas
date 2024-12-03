import React, {useContext, useState} from "react";
import { taskContext } from "../Context/Context";

export const InputTask=()=>{

    const context=useContext(taskContext)

    const[newTasks,setNewTasks]=useState('')

    const handleNewTask=(Event)=>setNewTasks(Event.target.value)

    const handleAddTask = () => {
        if (newTasks.trim()) {
            context.setTasks([...context.tasks, newTasks]);
            setNewTasks(""); // Limpia el campo de texto después de agregar la tarea
        }
    }
    
    return(
        <>
        <input onChange={handleNewTask} value= {newTasks} type="text" name= "" id ="" placeholder='tarea'/>
        <button onClick={handleAddTask}>Agregar</button>
        </>
    )

}