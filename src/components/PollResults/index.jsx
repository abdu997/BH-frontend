import { useContext } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import PollContext from "../../utils/PollContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    barChart: {
        width: "100%",
        minHeight: "300px",
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
    },
    chartTitle: {
        fontWeight: "700",
    },
}));

// Generates a Bar Chart using Recharts
function PollResults() {
    const classes = useStyles();

    const { pollQuestion, pollOptions } = useContext(PollContext);
    if (!pollOptions) return null;
    const data = [...pollOptions];
    return (
        <Paper className={classes.paper}>
            <Typography align="center" className={classes.chartTitle}>
                {pollQuestion}
            </Typography>
            <ResponsiveContainer className={classes.barChart}>
                <BarChart data={data}>
                    <XAxis dataKey="title" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="voteCount" name="votes" fill="#3f51b5" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
}

export default PollResults;
