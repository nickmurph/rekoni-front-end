import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

import ParticlesBg from 'particles-bg';
import {clarifaiKey, clarifaiPAT} from './ClarifaiKey.js';


//Helper vars for querying the Clarifai REST API, different from the clarifai node package used by ZTM which is now deprecated
//API key and PAT kept in JS file that is gitignored, for now
const API_KEY = clarifaiKey;
const API_PAT = clarifaiPAT;
const USER_ID = 'w0rtw0rtw0rt';
const APP_ID = 'rekoni';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';


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

    const clarifaiCredentials = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": this.state.input
                }
            }
        }
    ]});
    
    const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + API_PAT
      },
      body: clarifaiCredentials
    };

    
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => {
      this.displayFaceBox(this.calcFaceDimensions(result));
      fetch('http://localhost:3000/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: this.state.user.id}
        )})
      .then(response =>response.json())
      .then(response => {
        this.setState(Object.assign(this.state.user, { entries: response}))
      })
    })
    .catch(error => console.log(error));
  };

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
