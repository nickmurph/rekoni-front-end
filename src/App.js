import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';





//initial state of app upon startup, return to when user signs out
const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin', 
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '' 
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calcFaceDimensions = (data) => {
    const foundFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const [width, height] = [Number(image.width), Number(image.height)];
    return {
      leftCol: foundFace.left_col * width,
      topRow: foundFace.top_row * height,
      rightCol: width - (foundFace.right_col * width),
      bottomRow: height - (foundFace.bottom_row * height)
    }
  };

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange= (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});

    fetch('http://localhost:3000/imageURL', {
      method: 'post',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({
        input: this.state.input
      })
    }).then(response => response.json())
    .then(response => {
      fetch('http://localhost:3000/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: this.state.user.id}
        )})
      .then(response =>response.json())
      .then(result => {
        this.setState(Object.assign(this.state.user, { entries: result}))
      })
    this.displayFaceBox(this.calcFaceDimensions(response));
    })
    .catch(error => console.log(error));
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState)
      route = "signin"
    }else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  render() {
    const { isSignedIn, imageURL, route, box } = this.state;
    return (
      <div className="App">
        <br />
        <div className="inline-flex flex-row">
          <Logo />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        </div>
        <br />
        <br />
        <br />
        <br />
        {route === 'home'
        ? <div>
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <br />
        <FaceRecognition box={box} imageURL={imageURL} />
        </div>
        : (
          route === 'signin' 
          ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )
      }
    
        <ParticlesBg color="#cad0db" num={150} type="cobweb" bg={true} />
      </div>   
    );
  }
}

export default App;
