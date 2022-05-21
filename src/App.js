import React, { useState } from 'react'
import './App.css';
import ListGifs from './Components/ListGifs';


function App() {
  const [keyword,setkeyword] = useState('Cats')
   
  const [key,setKey] = useState('Cats')

  return (
    <div className="App">
      <section className="App-content">
        <section>
          <input placeholder='Ingresa palabra clave' className='search' type="text" onChange={event => setKey(event.target.value)}/>
          <button className='btn btn-primary' onClick={() => setkeyword(key)}>Buscar</button>  
        </section>
        <section className='Gifs-content'>
          <ListGifs keyword={keyword}/>
        </section>w
        <section className='list-busquedas'>
          
        </section>
      </section>
      
    </div>
  );
}

export default App;
