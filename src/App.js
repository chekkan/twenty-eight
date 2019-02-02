import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { thirtyTwoDeck } from "./lib/deck-of-cards";
class App extends Component {
  render() {
    return <Board deck={thirtyTwoDeck} />;
  }
}

export default App;
