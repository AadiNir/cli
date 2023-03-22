import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
  const [data,setdata]=useState([{}])
  useEffect(()=>{
    fetch("/members").then(
      res => res.json()
    ).then(
      data=>{
        setdata(data)
      }
    )
  },[])
  

  return (
    <div className="App">

    {(typeof data.members==='undefined')?(<p>Loading</p>):
      data.members.map((member,i)=>(
      <h1 key={i}>{member}</h1>

    ))}
    
    
    </div>
  );
}

export default App;
