import React from "react";
import {TextFieldProps} from "@material-ui/core";
import store from "store2";

export const getValue = (ref: React.RefObject<TextFieldProps>):string => {
    return ref.current ? String(ref.current.value) : '';
}

export const isLoggedIn = ():boolean => {
    return Boolean(store.get('SESSION_ID'));
}
