import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import FaceRecognition from './components/FaceRecognition/FaceRecognition'; 
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import "./App.css";

const returnClarifaiRequestOptions = (imageUrl) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "50aff807302844d9828e1518ccd9d882";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "txg0oa4xu0zl";
  const APP_ID = "my-first-application";
  // Change these to whatever model and image URL you want to use
  //const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl:"",
      box:{}
    };
  }

caluculateFaceLocation = (data) =>{
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  console.log(width, height)
  console.log(clarifaiFace)
  return{
    leftCol : clarifaiFace.left_col * width,
    topRow : clarifaiFace.top_row * height,
    rightCol : width -(clarifaiFace.right_col * width),
    bottomRow : height - (clarifaiFace.bottom_row * height)
    
  }
}

displayFaceBox = (box) => {
  console.log(box)
  this.setState({box:box});
}

  onInputChange = (event) => {
    this.setState({ input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      returnClarifaiRequestOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((response) => this.displayFaceBox(this.caluculateFaceLocation(response))
      )
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg
          className="particles"
          color="#FFFFFF"
          num={300}
          type="cobweb"
          bg={true}
        />
        <Navigation />
        <Logo />s
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
