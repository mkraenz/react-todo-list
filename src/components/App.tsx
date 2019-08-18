import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import { Todo } from "./Todo";

const reactLogo = require("./../assets/img/react_logo.svg");

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Mirco's Todo list</h1>
        <p>here comes an element</p>
        <img src={reactLogo} height="480" />
        <Todo />
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
