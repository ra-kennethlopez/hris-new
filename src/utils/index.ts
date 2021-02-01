import React from "react";
import {TextFieldProps} from "@material-ui/core";

export const getValue = (ref: React.RefObject<TextFieldProps>) => {
    return ref.current ? String(ref.current.value) : '';
}