import { useContext, useEffect } from "react";
import { taskContext } from "../Context/Context";

export const ListTasks=()=>{
    const miContexto=useContext(taskContext)
    useEffect(()=>console.log(miContexto),[])
    return(
        <ul>
            {
            miContexto.tasks.map( (tsk, index) => <li key = {index}>{tsk}</li>)
            }
        </ul>
    );
};