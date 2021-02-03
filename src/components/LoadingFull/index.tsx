import React from "react";
import {Props} from "./types";
import {Backdrop} from "@material-ui/core";
import {useStyles} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingFull:React.FC<Props> = (props) => {
    const {show} = props;
    const classes = useStyles();

    return (
        <div>
            <Backdrop className={classes.backdrop} color='primary' open={show}>
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    );
}

export default LoadingFull;
