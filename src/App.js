import './App.css';
import {useState} from 'react'
import Main from './components/main';
import Navbar from './components/navbar'
import burger from './assets/5.png'

const  App = () => {
   const [rotate, setRotate] = useState(false)

  return (
    <div className='scrollbar-hide'>
       <Main/>
    </div>

  );
}

export default App;
