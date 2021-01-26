import React from "react";
import {Card, makeStyles, useTheme} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const LoginForm: React.FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="http://clients.rightapps.tech/cotabato/images/acc.png"
            />
            <div className={classes.details}>
                <CardMedia
                    className={classes.logo}
                    image="http://clients.rightapps.tech/cotabato/images/guihulngan.png"
                />
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h4" align="center">
                        Account Login
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '65px',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '50%',
    },
    logo: {
        width: '280px',
        height: '280px'
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
}));

export default LoginForm;
