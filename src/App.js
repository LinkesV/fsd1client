import './App.css';
import Movies from './Pages/Movies';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';


const data = createContext()
function App() {

  const[value,setValue] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <data.Provider value={[value,setValue]}>
        <Routes>
         
            <Route exact path='/movies' element={<Movies/>}/>
          
        </Routes>
        </data.Provider>
      </BrowserRouter>
    </div>
  );
}

export {data}; 
export default App;
