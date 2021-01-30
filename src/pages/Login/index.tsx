import React from "react";
import LoginForm from "../../components/LoginForm";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";

const Login: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                className={classes.grid}
            >
                <Grid item>
                    <LoginForm className={classes.loginForm} />
                </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
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

export default Login;
