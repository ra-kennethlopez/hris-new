import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh',
        },
        grid: {
            height: 'inherit'
        },
        loginForm: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
        }
    })
);