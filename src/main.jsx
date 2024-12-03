import './index.css'
import {App} from './App.jsx'
import { createRoot } from 'react-dom/client'
import { TaskProvider} from './components/Context/Context.jsx'


createRoot(document.getElementById('root')).render(<TaskProvider><App/></TaskProvider>)

