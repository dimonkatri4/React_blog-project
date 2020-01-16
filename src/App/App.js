import React from 'react';
import '../common/style/reset.css'
import Header from './Header/Header'
import '../common/style/base.css'
import Slider from './Slider/Slider';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
    </div>
  )
}

export default App;
