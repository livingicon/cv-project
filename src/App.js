// App.js

import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./componenets/Main";
import Footer from "./components/Footer";
 
class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;