import React from "react";
import Header from "./Header.js";
import Menu from "./Menu";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container app">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
