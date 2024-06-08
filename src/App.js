import './App.css';
import { useState } from 'react';
import Navbar from './Components/Frontend/Navbar'
import Main from './Components/Frontend/Main'
import Flat from './Components/Frontend/Flat'
import Navbar2 from './Components/Frontend/Navbar2';

function App() {
  const [Light, setLight] = useState('zinc-50')
  const [Light1, setLight1] = useState('zinc-200')
  const [Text, setText] = useState('neutral-950')
  const [TextD, setTextD] = useState('Dark')
  const toggleButton =()=>{
    if(Light === 'zinc-50'){
      setLight('zinc-800')
      setText('neutral-50')
      setLight1('zinc-700')
      setTextD('Light')
    }
    else{
      setLight('zinc-50')
      setText('neutral-950')
      setLight1('zinc-200')
      setTextD('Dark')
    }
  }
  return (
    <div className="App">
      <Navbar toggleButton={toggleButton} Background={Light} Text={Text} Text1={TextD} Light1={Light1} />
      <Navbar2 toggleButton={toggleButton} Background={Light} Text={Text} Text1={TextD} Light1={Light1} />
      <Main />
      <Flat />
    </div>
  );
}

export default App;
