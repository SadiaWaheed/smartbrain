import React, { Component } from "react";
import "./App.css";
import ParticlesBg from"particles-bg";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" color="#FFFFFF" num={300} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
