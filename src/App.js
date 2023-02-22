import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.js';
import Logo from './components/logo/logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js'


function App() {
  return (
    <div className="App">
    <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm />
      {/* <FaceRecognition/>} */}
    </div>
  );
}

export default App;
