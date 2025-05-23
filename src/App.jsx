import React, { useContext, useEffect } from 'react'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Slidebar from './Components/Slidebar/Slidebar'
import Aos from 'aos'
import './App.css'
import 'aos/dist/aos.css';
import { StoreContext } from './Store/Store'

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const {isOpen} = useContext(StoreContext);
  return (
    <div >
      {
        isOpen && <Slidebar/>
      }
      
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
