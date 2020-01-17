import React from 'react';
import '../common/style/reset.css'
import Header from './Header/Header'
import '../common/style/base.css'
import Slider from './Slider/Slider';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
