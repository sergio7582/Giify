import React, { useState } from 'react'
import './App.css';
import ListGifs from './Components/ListGifs';


function App() {
  const [keyword,setkeyword] = useState('Cats')
   
  const [key,setKey] = useState('Cats')

  return (
    <div className="App">
      <section className="App-content">
        <section className='App-header'> 
          <div className='group'>
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="" type="search" className="input" onChange={event => setKey(event.target.value)}/>
          </div>   
          <button className='btn' onClick={() => setkeyword(key)}>
            <span className='transition'></span>
            <span className='gradient'></span>
            <span className='label'>Buscar</span>
          </button>            
        </section>
          
        <section className='Gifs-content'>
          <ListGifs keyword={keyword}/>
        </section>
        <section className='list-busquedas'>
          
        </section>
      </section>
      
    </div>
  );
}

export default App;
