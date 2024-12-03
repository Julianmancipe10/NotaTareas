import { createContext, useState } from "react"
export const taskContext= createContext()
// let 


export const TaskProvider=({children})=>{
    
    const [tasks, setTasks] = useState([]);

    
    
    return(
        <taskContext.Provider value={{tasks,setTasks}}>
            {children}
            </taskContext.Provider>
    )
}