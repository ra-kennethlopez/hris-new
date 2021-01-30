import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh',
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