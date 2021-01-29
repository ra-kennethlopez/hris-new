import {createMuiTheme} from "@material-ui/core/styles";
import {green, lightBlue} from "@material-ui/core/colors";

export default createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[600],
            light: lightBlue[400],
            dark: lightBlue[800]
        },
        secondary: {
            main: green[600],
            light: green[400],
            dark: green[800]
        }
    }
})
