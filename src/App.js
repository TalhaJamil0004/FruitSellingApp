
import './App.css';
import "./output.css";
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";
import Footer from './components/Footer/Footer';

function App() {
  let [dark , setDark]= React.useState({color:"black", backgroundColor:"white"})
  let [off, setOn] =React.useState (false)
  function Toggle() {
    setOn((previous) => {
      const newOff = !previous;
      setDark(
        newOff
          ? { color: "white", backgroundColor: "black" }
          : { color: "black", backgroundColor: "white" }
      );
      return newOff;
    });
  }
  

  return (
    <div style={dark}>
    <main  className='overflow-x-hidden'>
      <Navbar Toggle={Toggle} Off={off}/>
      <Hero/>
      <Menus Off={off}/>
      <Banner Off={off} />
      <Banner2/>
      <Banner3 Off={off}/>
      <Footer Off={off}/>
    </main>
  </div>
  );
}

export default App;
