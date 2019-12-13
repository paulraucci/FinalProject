import React, { Component } from "react";
import "./App.css";
import Cities from "./Components/Cities";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3001";
} else {
  baseURL = "https://developers.zomato.com/api/v2.1/";
}

console.log("current base URL:", baseURL);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cities />
      </div>
    );
  }
}

export default App;
