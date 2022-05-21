import React from 'react'
import '../App.css';

export default function({title,id,url}){
    return(
        <div className='Gifs-content-img'>             
            <label className='img-title'>{title}</label>
            <img className='img-gifs' alt={title} width={200} height={200} src={url}/>
        </div>
    )
    
}