import * as React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

interface ITextChangeEvent {
    target: { value: string };
}

export class Todo extends React.Component<
    {},
    { value: string; done: boolean }
> {
    constructor(props: {
        onTextChanged: (event: ITextChangeEvent, id: string) => void;
    }) {
        super(props);
        this.state = {
            value: "",
            done: false,
        };
    }

    public handleChange(event: { target: { value: string } }) {
        this.setState({ value: event.target.value });
    }

    public handleCheckboxClick() {
        this.setState({ done: !this.state.done });
    }

    public render() {
        return (
            <div className="todo">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox
                            checked={this.state.done}
                            onClick={() => this.handleCheckboxClick()}
                        />
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="add todo"
                        value={this.state.value}
                        onChange={(event: any) => this.handleChange(event)}
                    />
                </InputGroup>
            </div>
        );
    }
}
