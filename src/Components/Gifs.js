import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react'
import '../App.css';
import Modal from './modal'

export default function({title,id,url}){                
       
    const [state,setState] = useState(false)
    const [Id,setId] = useState('')
    
    const OpenModal = (idGif) =>{ 
        setState(!state)        
        setId(idGif)        
    }
    
    
    if(state){
        return(
        
            <div className='Gifs-content-img'>             
                <label className='img-title'>{title}</label>
                <img onClick={() => OpenModal(id)} className='img-gifs' alt={title} width={200} height={200} src={url}/>                    
                <Modal State={state} Gifid={Id}></Modal>
            </div>
            
        )
    }else{
        return(
        
            <div className='Gifs-content-img'>             
                <label className='img-title'>{title}</label>
                <img onClick={() => OpenModal(id)} className='img-gifs' alt={title} width={200} height={200} src={url}/>                                    
            </div>
            
        )
    }
    
    
}