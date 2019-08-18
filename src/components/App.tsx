import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import { Todo } from "./Todo";

const reactLogo = require("./../assets/img/react_logo.svg");

class App extends React.Component<{}, { todos: Array<string> }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    public render() {
        return (
            <div className="app">
                <h1>Mirco's Todo list</h1>
                <p>here comes an element</p>
                <img src={reactLogo} height="480" />
                <Todo
                // onTextChanged={(event: any, i: number) =>
                //     this.onTodoTextChanged(i, event)
                // }
                />
                <Todo />
            </div>
        );
    }

    public onTodoTextChanged(i: number, event: { target: { value: string } }) {
        const todos = this.state.todos.slice();
        todos[i] = event.target.value;
        this.setState({ todos });
    }
}

declare let module: object;

export default hot(module)(App);
