import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange= (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <br />
        <div className="inline-flex flex-row"><Logo /><Navigation /></div>
        <br />
        <br />
        <br />
        <br />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/* <FaceRecognition/> */}
        <ParticlesBg color="#424957" num={150} type="cobweb" bg={true} />
      </div>   
    );
  }
}

export default App;
