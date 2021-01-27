import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const LoginForm: React.FC = () => {
    const classes = useStyles();

    return (
        // <Card className={classes.root}>
        //     <CardMedia
        //         className={classes.cover}
        //         image="http://clients.rightapps.tech/cotabato/images/acc.png"
        //     />
        //     <div className={classes.details}>
        //         <CardMedia
        //             className={classes.logo}
        //             image="http://clients.rightapps.tech/cotabato/images/guihulngan.png"
        //         />
        //         <CardContent className={classes.content}>
        //             <Typography component="h5" variant="h4" align="center">
        //                 Account Login
        //             </Typography>
        //             <Typography variant="subtitle1" color="textSecondary">
        //                 Mac Miller
        //             </Typography>
        //         </CardContent>
        //     </div>
        //     <div className={classes.grid}>
        //         <Grid container spacing={5}>
        //             <Grid item xs={6}>
        //                 <CardMedia
        //                     className={classes.cover}
        //                     image="http://clients.rightapps.tech/cotabato/images/acc.png"
        //                 />
        //             </Grid>
        //             <Grid item xs={6}>
        //                 <div className={classes.details}>
        //                     <CardMedia
        //                         className={classes.logo}
        //                         image="http://clients.rightapps.tech/cotabato/images/guihulngan.png"
        //                     />
        //                 </div>
        //             </Grid>
        //         </Grid>
        //     </div>
        // </Card>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={6}>
                        <div className={classes.coverImage}>
                            <img className={classes.coverImg} alt='cover' src='http://clients.rightapps.tech/cotabato/images/acc.png'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={5}>
                            <Grid item xs container justify='center' alignItems='center'>
                                <Grid item xs>
                                    <img alt='logo' src='http://clients.rightapps.tech/cotabato/images/guihulngan.png' />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} container direction='row'>
                                <form className={classes.form}>
                                    <Grid item xs={6}>
                                        <TextField id='username' label='User name' />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField id='password' label='Password'/>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // display: 'flex',
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



        grid: {
            flexGrow: 1
        },
        details: {
            // display: 'flex',
            // flexDirection: 'column',
            // paddingLeft: theme.spacing(5),
            // alignItems: 'center',
            // flexGrow: 1
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            // width: '50%',
            width: '100%',
            height: '100%'
        },
        logo: {
            width: '280px',
            height: '280px',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);

export default LoginForm;
