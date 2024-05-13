import React, { useState } from 'react';
import data from './data';
import List from './List';


// const handleList(( )=>{
//   setPeople([]);

// })

function App() {
  const [people,setPeople]=useState(data);

  function handleList(){
    setPeople([])
  }
  function handleRefresh(){
    setPeople(data)
  }
  return (
  <main>

  

  <section className='container'>
    <h3>{people.length} Birthdays</h3>
    <List people={people}/>
    <button onClick={handleList}>Clear all</button>
    <button onClick={handleRefresh}>Refresh</button>
    
  </section>
  </main>
  )

}

export default App;
