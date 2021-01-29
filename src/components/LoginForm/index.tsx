import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {Props} from "./types";

const LoginForm: React.FC<Props> = ({className}) => {
    const classes = useStyles();
    const propClass = className ? className : '';
    const root = classes.root + ' ' + propClass;

    return (
        <div className={root}>
            <Paper elevation={3}>
                <Grid container>
                    <Grid item md={6}>
                        <Box className={classes.coverImage} display={{xs: 'none', sm: 'none', md: 'block'}}>
                            <img className={classes.coverImg} alt='cover' src='http://clients.rightapps.tech/cotabato/images/acc.png'/>
                        </Box>
                    </Grid>
                    <Grid item md={6} container>
                        <Grid item md container direction='column'>
                            <Grid item md container justify='center' alignItems='center'>
                                <Grid item md>
                                    <Box m={3}>
                                        <img className={classes.logoImg} alt='logo' src='http://clients.rightapps.tech/cotabato/images/guihulngan.png' />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item md container direction='column'>
                                <Grid item md>
                                    <Typography className={classes.centerText} variant='h5'>ACCOUNT LOGIN</Typography>
                                </Grid>
                                <Grid item md>
                                    <Box m={3}>
                                        <Grid item container direction='row' spacing={2}>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <TextField className={classes.textField} id='username' label='Username' variant='outlined' />
                                            </Grid>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <TextField className={classes.textField} id='password' label='Password' variant='outlined' type='password' />
                                            </Grid>
                                        </Grid>
                                        <Grid item md container direction='column'>
                                            <Grid item md>
                                                <Box my={3}>
                                                    <Button className={classes.signInButton} variant='contained' color='primary'>Sign in</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item md>
                                                <Typography className={classes.centerText} variant='body2'>
                                                    Forgot {' '}
                                                    <Link underline='none' href='#' color='secondary'>Username/Password</Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>
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
            flexGrow: 1,
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
