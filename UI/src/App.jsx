import React from 'react';
import Herosection from './components/Hero';
import Home from './components/Home';
import Auth from './components/Auth';
import Chat from './components/Chat';

import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  

  return (

    <BrowserRouter>
    <Routes>

    <Route path='/' Component={Herosection}/>
    <Route path='/home' Component={Home}/>
    <Route path='/auth' Component={Auth}/>
    <Route path='/chat' Component={Chat}/>
 
    </Routes>
    </BrowserRouter>
  )
}

export default App
