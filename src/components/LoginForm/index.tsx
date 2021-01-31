import React from "react";
import {Props} from "./types";
import {useStyles} from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const LoginForm: React.FC<Props> = (props) => {
    const {
        className,
        leftImgSrc,
        logoImgSrc,
        usernameRef,
        passwordRef,
        usernameDefaultValue,
        passwordDefaultValue,
        onSignInClick,
    } = props;

    const classes = useStyles();
    const propClass = className ? className : '';
    const rootClasses = classes.root + ' ' + propClass;

    return (
        <div className={rootClasses}>
            <Paper elevation={3}>
                <Grid container>
                    <Grid item md={6}>
                        <Box
                            className={classes.leftCoverImgContainer}
                            display={{xs: 'none', sm: 'none', md: 'block'}}
                        >
                            <img
                                className={classes.leftCoverImg}
                                src={leftImgSrc ? leftImgSrc : 'http://clients.rightapps.tech/cotabato/images/acc.png'}
                                alt='left side cover'
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6} container>
                        <Grid item md container direction='column'>
                            <Grid item md container justify='center' alignItems='center'>
                                <Grid item md>
                                    <Box m={3}>
                                        <img
                                            className={classes.logoImg}
                                            src={logoImgSrc ? logoImgSrc : 'http://clients.rightapps.tech/cotabato/images/guihulngan.png'}
                                            alt='logo'
                                        />
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
                                                <TextField
                                                    inputRef={usernameRef}
                                                    className={classes.textField}
                                                    defaultValue={usernameDefaultValue ? usernameDefaultValue : ''}
                                                    id='username'
                                                    label='Username'
                                                    variant='outlined'
                                                />
                                            </Grid>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <TextField
                                                    inputRef={passwordRef}
                                                    className={classes.textField}
                                                    defaultValue={passwordDefaultValue ? passwordDefaultValue : ''}
                                                    id='password'
                                                    label='Password'
                                                    variant='outlined'
                                                    type='password'
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item md container direction='column'>
                                            <Grid item md>
                                                <Box my={3}>
                                                    <Button
                                                        className={classes.signInButton}
                                                        variant='contained'
                                                        color='primary'
                                                        onClick={onSignInClick}
                                                    >
                                                        Sign in
                                                    </Button>
                                                </Box>
                                            </Grid>
                                            <Grid item md>
                                                <Typography className={classes.centerText} variant='body2'>
                                                    Forgot {' '}
                                                    <Link underline='none' href='#' color='secondary'>Username / Password</Link>
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

export default LoginForm;
