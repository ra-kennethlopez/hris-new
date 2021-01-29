import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const LoginForm: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={6}>
                        <div className={classes.coverImage}>
                            <img className={classes.coverImg} alt='cover' src='http://clients.rightapps.tech/cotabato/images/acc.png'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column'>
                            <Grid item xs container justify='center' alignItems='center'>
                                <Grid item xs>
                                    <img className={classes.logoImg} alt='logo' src='http://clients.rightapps.tech/cotabato/images/guihulngan.png' />
                                </Grid>
                            </Grid>
                            <Grid item xs container direction='column'>
                                <Grid item xs>
                                    <Box mt={3}>
                                        <Typography className={classes.centerText} variant='h5'>ACCOUNT LOGIN</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box m={3}>
                                        <form className={classes.form}>
                                            <Grid item xs={12} container direction='row'>
                                                <Grid item xs={6}>
                                                    <Box mr={2}>
                                                        <TextField className={classes.textField} id='username' label='Username' variant='outlined' />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField className={classes.textField} id='password' label='Password' variant='outlined' type='password' />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs container direction='column'>
                                                <Grid item xs>
                                                    <Box my={3}>
                                                        <Button className={classes.signInButton} variant='contained' color='primary'>Sign in</Button>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography className={classes.centerText} variant='body2'>
                                                        Forgot {' '}
                                                        <Link href='#' color='secondary'>Username/Password</Link>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1
        },
        paper: {
            margin: 'auto',
            maxWidth: 1170
        },
        coverImage: {
            width: '100%',
            height: '100%',
        },
        coverImg: {
            display: 'block',
            width: '100%',
            height: '100%'
        },
        form: {
            width: '100%'
        },
        logoImg: {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        },
        textField: {
            width: '100%'
        },
        centerText: {
            textAlign: 'center'
        },
        signInButton: {
            width: '100%'
        }
    }),
);

export default LoginForm;
