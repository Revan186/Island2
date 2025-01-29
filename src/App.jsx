import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import morrowind from './assets/morrowind.mp3'
import { soundon, soundoff } from './assets/icons'


function App() {
 {/* const audioRef = useRef(new Audio(morrowind));
  audioRef.current.volume = 0.16;
  audioRef.current.loop = true;
	audioRef.current.play()

	const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [ isPlayingMusic ]);

	const audition = () => {
		audioRef.current.play()}*/}

  

  
  return (
  <main className='bg-slate-300/20' >
      
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  </main>
  )
}

export default App
