import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import { Counter } from './Modules/counter/Counter';
import { useState } from 'react';
import {db} from './firebase-config';

function App() { 
  const [users, setUsers] = useState([]);

  useEffect(() =>{})

  return (
    <div className="App">



      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path ='/' element={<Counter/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
`