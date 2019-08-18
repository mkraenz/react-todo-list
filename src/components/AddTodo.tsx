import * as React from "react";
import { FormControl, FormControlProps, InputGroup } from "react-bootstrap";
import { BsPrefixProps, ReplaceProps } from "react-bootstrap/helpers";
import { ITextChangeEvent } from "./ITextChangeEvent";

type Props = {
    value: string;
    onTextChanged: (event: ITextChangeEvent) => void;
};

export const AddTodo: React.FunctionComponent<Props> = (props: Props) => {
    type FormControlEvent = React.FormEvent<
        ReplaceProps<"input", BsPrefixProps<"input"> & FormControlProps>
    >;

    return (
        <div className="add-todo ">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>+</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="add todo"
                    value={props.value}
                    onChange={(event: FormControlEvent) =>
                        props.onTextChanged(event)
                    }
                    autoFocus
                />
            </InputGroup>
        </div>
    );
};
