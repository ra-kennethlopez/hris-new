import React from "react";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Typography from "@material-ui/core/Typography";

const NotFound: React.FC = () => {
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
                    <SentimentVeryDissatisfiedIcon className={classes.sadIcon} />
                </Grid>
                <Grid item>
                    <Typography className={classes.heading} variant='h1'>404</Typography>
                </Grid>
                <Grid item>
                        <Typography className={classes.subHeading} variant='h3'>Page not found</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.body} variant='body1'>The page you arr looking for doesn't exist or an other error occurred.</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh',
            backgroundColor: theme.palette.grey[100]
        },
        grid: {
            height: 'inherit'
        },
        sadIcon: {
            height: '100%',
            width: '100%',
            color: theme.palette.grey[600]
        },
        heading: {
            color: theme.palette.grey[600]
        },
        subHeading: {
            color: theme.palette.grey[400]
        },
        body: {
            color: theme.palette.grey[600]
        },
    })
);

export default NotFound;
