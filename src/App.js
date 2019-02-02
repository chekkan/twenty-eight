import React, { Component } from "react";
import "./App.css";
import Deck from "./Deck";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <button>Shuffle</button>
        </div>
        <Deck />
      </>
    );
  }
}

export default App;
