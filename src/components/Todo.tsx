import * as React from "react";
import { Form } from "react-bootstrap";

export class Todo extends React.Component<
    {},
    { value: string; done: boolean }
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: "asdf",
            done: false,
        };
    }

    public handleChange(event: { target: { value } }) {
        this.setState({ value: event.target.value });
    }

    public handleCheckboxClick() {
        this.setState({ done: !this.state.done });
    }

    public render() {
        // TODO
        return (
            <div className="todo">
                <Form>
                    <input
                        type="checkbox"
                        checked={this.state.done}
                        onClick={() => this.handleCheckboxClick()}
                    />
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={event => this.handleChange(event)}
                    />
                    <p>{this.state.value}</p>
                </Form>
            </div>
        );
    }
}
