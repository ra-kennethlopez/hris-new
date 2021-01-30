import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        leftCoverImgContainer: {
            width: '100%',
            height: '100%',
        },
        leftCoverImg: {
            display: 'block',
            width: '100%',
            height: '100%'
        },
        form: {
            width: '100%'
        },
        logoImg: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%'
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