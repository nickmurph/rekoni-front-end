import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';
import {clarifaiKey, clarifaiPAT} from './ClarifaiKey.js';


//Helper vars for querying the Clarifai REST API, different from the clarifai node package used by ZTM which is now deprecated
//API key and PAT kept in JS file that is gitignored, for now
const API_KEY = clarifaiKey;
const PAT = clarifaiPAT;
const USER_ID = 'w0rtw0rtw0rt';
const APP_ID = 'rekoni';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';



class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

  onInputChange= (event) => {
    // console.log(event.target.value)
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});

    let IMAGE_URL = this.state.input;
    // console.log(this.state.input)
    // console.log(this.state.imageURL)

    const clarifaiCredentials = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: clarifaiCredentials
  };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.text())
    .then(result => console.log('POST request made')) //print result for full info
    .catch(error => console.log('error', error));
  };


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
        <FaceRecognition />
        <ParticlesBg color="#424957" num={150} type="cobweb" bg={true} />
      </div>   
    );
  }
}

export default App;
