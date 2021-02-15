import React, {BaseSyntheticEvent} from "react";
import { TextFieldProps } from "@material-ui/core/TextField";

export type Props = {
  className?: string;
  leftImgSrc?: string;
  logoImgSrc?: string;
  usernameRef?: React.RefObject<TextFieldProps>;
  passwordRef?: React.RefObject<TextFieldProps>;
  usernameDefaultValue?: string;
  passwordDefaultValue?: string;
  usernameError?: string;
  passwordError?: string;
  formError?: string;
  onSubmit?: (e: BaseSyntheticEvent) => void;
};
