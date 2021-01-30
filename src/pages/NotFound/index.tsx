import React from "react";
import {useStyles} from "./styles";
import Grid from "@material-ui/core/Grid";
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
                    <Typography className={classes.body} variant='body1'>The page you are looking for doesn't exist or an other error occurred.</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default NotFound;
