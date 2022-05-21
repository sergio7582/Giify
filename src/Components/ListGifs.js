import React,{useEffect,useState}  from "react";
import Gifs from "./Gifs"
import getGifs from "../Services/ApiGifs";

export default function ListGifs({ keyword }){    
    const  [gifs, setGifs] = useState([])

    useEffect(function(){
      getGifs({keyword}).then(gifs => 
      setGifs(gifs))
    }, [keyword])
  
   
    return gifs.map(({title, id, url}) => 
      <Gifs 
        key={id}
        id={id}
        title={title}
        url={url}
      /> 
    ) 
   
}