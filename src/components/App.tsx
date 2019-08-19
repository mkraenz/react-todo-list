import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import { AddTodo } from "./AddTodo";
import { ITextChangeEvent } from "./ITextChangeEvent";
import { Todo } from "./Todo";

class App extends React.Component<{}, { todos: Array<string> }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: ["my first todo", "my second todo"],
        };
    }

    public render() {
        return (
            <div className="app">
                <h1>Mirco's Todo list</h1>
                {this.state.todos.map((todo, i) => (
                    <Todo
                        value={todo}
                        onTextChanged={(event: ITextChangeEvent) =>
                            this.handleTodoTextChanged(i, event)
                        }
                        onCheckboxClicked={() => this.handleCheckboxClicked(i)}
                    />
                ))}
                <AddTodo
                    onTextChanged={(event: ITextChangeEvent) =>
                        this.handleTodoTextChanged(
                            this.state.todos.length,
                            event
                        )
                    }
                />
            </div>
        );
    }
    public handleCheckboxClicked(i: number) {
        const todos = this.state.todos.filter(x => x !== this.state.todos[i]);
        this.setState({ todos });
    }

    public handleTodoTextChanged(i: number, event: ITextChangeEvent) {
        const todos = this.state.todos.slice();
        todos[i] = event.currentTarget.value;
        this.setState({ todos });
    }
}

declare let module: object;

export default hot(module)(App);
