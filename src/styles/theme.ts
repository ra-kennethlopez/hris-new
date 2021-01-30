import {createMuiTheme} from "@material-ui/core/styles";
import {green, grey, lightBlue} from "@material-ui/core/colors";

const primaryLight = lightBlue[400];
const primaryMain = lightBlue[600];
const primaryDark = lightBlue[800];

const secondaryLight = green[400];
const secondaryMain = green[600];
const secondaryDark = green[800];

export default createMuiTheme({
    palette: {
        primary: {
            main: primaryMain,
            light: primaryLight,
            dark: primaryDark
        },
        secondary: {
            main: secondaryMain,
            light: secondaryLight,
            dark: secondaryDark
        },
        background: {
            default: grey[100],
        }
    },
    overrides: {
        MuiLink: {
            root: {
                '&:hover': {
                    color: secondaryDark
                },
            }
        },
        MuiOutlinedInput: {
            root: {
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: secondaryLight,
                }
            }
        },
    },
})
