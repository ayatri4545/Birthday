import React, { useState } from 'react'
// import List from './Proj1-BdayCard/Data'
import List from './Birthday/Data'
import './Data.css'
const App = () => {
  const[data,setData]=useState(List)
  return (
    <div className='main-div'>
      <h1>Today birthdays are {data.length}</h1>
      {data.map((x)=>{
        return(
          <div className='card' key={x.id}>
            <div className='content'>
            <img src={x.image} alt="" />
            <h3>{x.name}
            <p>  {x.age}</p>
            </h3>
            </div>
          </div>
        )
      })}
      <center>
      <button className='.btn' onClick={()=>setData([])}>Clear</button>
      </center>
    </div>
  )
}

export default App
