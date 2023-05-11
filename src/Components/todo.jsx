import React, { useEffect, useState } from 'react'
import '../App.css'

const Todo = () => {
    let [names,updatenames]=useState([]);
    let [name,updatename]=useState('');
    useEffect(()=>{
        localStorage.setItem('names',names);
    });
  return (
    <>
        <div id='add'>
        <input id='in' type="text" name='name' value={name} placeholder='Add your To Do List' onChange={(e)=>{
            updatename(e.target.value);
        }}/>
       
        <button className='btn btn-success' onClick={()=>{
            updatenames(localStorage.getItem('name'));
            updatenames([...names,name]);
        }}>  Add Name </button>
        </div>

        {names.map((v,i)=>{
            return(
                <div id='data' key={i}>
            <div className='text-center' id='tskdata'>
            <h4>{v}</h4>
            <button className='btn btn-primary' onClick={()=>{
               updatename(v) ;
               updatenames(names.filter((i)=>{
                return i!==v;
               }))
            }}> update </button>'&nbsp''&nbsp'
            <button className='btn btn-close' onClick={()=>{
                updatenames(names.filter((i)=>{
                    return i!==v;
                }))
            }}></button>
            </div><hr/>
            </div>)
        })}
           
       
    </>
  )
}

export default Todo
