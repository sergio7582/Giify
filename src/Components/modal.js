import React, { useState,useEffect } from "react";
import './modal.css'
import {useModal} from '../Hooks/useModal'

export default function Modal({State,Gifid}){

    const [openModal,setOpen] = useState(false)

    useEffect(() => { 
        console.log(State)
        setOpen(State)         
        console.log(Gifid)        
    },[Gifid]);
    

    
    {if(openModal){
        return(
            <div>
                <button onClick={() => setOpen(false)}>Close</button>
                <h1>Hola mundo!!</h1>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }}
        
    
}