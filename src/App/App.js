import React from 'react';
import '../common/style/reset.css'
import Header from './Header/Header'
import '../common/style/base.css'
import Slider from './Slider/Slider';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={Slider} />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
