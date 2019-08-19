import * as React from "react";
import { FormControl, FormControlProps, InputGroup } from "react-bootstrap";
import { BsPrefixProps, ReplaceProps } from "react-bootstrap/helpers";
import { ITextChangeEvent } from "./ITextChangeEvent";

type Props = {
    value: string;
    onTextChanged: (event: ITextChangeEvent) => void;
    onCheckboxClicked: () => void;
};

export class Todo extends React.Component<Props, { done: boolean }> {
    constructor(props: Props) {
        super(props);
        this.state = {
            done: false,
        };
    }

    public handleCheckboxClick() {
        this.setState({ done: !this.state.done });
    }

    public render() {
        type FormControlEvent = React.FormEvent<
            ReplaceProps<"input", BsPrefixProps<"input"> & FormControlProps>
        >;

        return (
            <div className="todo">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox
                            checked={this.state.done}
                            onClick={this.props.onCheckboxClicked}
                        />
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="add todo"
                        value={this.props.value}
                        onChange={(event: FormControlEvent) =>
                            this.props.onTextChanged(event)
                        }
                        autoFocus
                    />
                </InputGroup>
            </div>
        );
    }
}
