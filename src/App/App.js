import React from 'react';
import '../common/style/reset.css'
import Header from './Header/Header'
import '../common/style/base.css'
import Slider from './Slider/Slider';
import Main from './Main/Main';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Main/>
    </div>
  )
}

export default App;
