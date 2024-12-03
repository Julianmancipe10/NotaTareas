import {React} from "react"
import './App.css';

import { InputTask } from "./components/InputTask/InputTask"
import { ListTasks } from "./components/ListTasks/ListTasks"

export const App=()=> {
  

  return (
    <>
        <h1>NOTA DE TAREAS :/</h1>
      <InputTask/>
      <ListTasks/>
     
    </>
  )
}


