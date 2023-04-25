import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header';

function App() {
  const [task, setTask] = useState('')
const [alltask, setAlltask] = useState([]);
const [editindex, setEditindex] = useState();
const [edittask, setEdittask] = useState();

const handleadd= ()=>{
const newtask = [...alltask, task];
setAlltask(newtask);
setTask('');

}
const handledelete = (index)=>{
const newtask = alltask.filter((_,i)=> i!= index);
setAlltask(newtask);
}
const handleedit = (index)=>{
   setEditindex(index);
  //  setEdittask(alltask(index));
}
const handlechange = (index)=>{
const newtask = [...alltask];
newtask[index] = edittask;
setAlltask(newtask);
setEditindex(null);
setEdittask('');
}

  return (
    <>
    <Header/>
    <div className="App container my-2">
    
      <div className='d-flex'>
   <input type="text" placeholder='Enter Task...' className='form-control mx-2' value={task} onChange={(e)=>setTask(e.target.value)}/>
   <button className='btn btn-primary' onClick={handleadd}>Add</button>
   </div>
   <ul className='list-group my-2'>
    {
      alltask.map((task, index)=>(
        editindex === index ? 
        <li className='list-group-item d-flex align-items-center justify-content-between'>
        <input type="tesk"className='form-control mx-2'  placeholder='newValue...' value={edittask} onChange={(e)=>setEdittask(e.target.value)}/>
        <button type="button" className='btn btn-success' onClick={()=>{handlechange(index)}}>Save</button>
        </li>
        :
        <>
        <li className='list-group-item d-flex align-items-center justify-content-between' key={index}>{task}
        <div className='d-flex'>
        <button type="button" className='btn btn-danger mx-2' onClick={()=>{handledelete(index)}}>Delete</button>
        <button type="button" className='btn btn-warning' onClick={()=>{handleedit(index)}}>Edit</button>
        </div>
        </li>
        </>
        
        
      ))
    }
   </ul>
    </div>
    </>
  );
}

export default App;
