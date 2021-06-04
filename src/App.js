import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import NavBar from "./components/NavBar";
import CreatePollForm from "./components/CreatePollForm";

import PollContext from "./utils/PollContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& .MuiTextField-root": {
            margin: theme.spacing(1, 0),
        },
    },
    content: {
        margin: theme.spacing(2, 0),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

function App() {
    const [pollSettings, setPollSettings] = useState({});
    const classes = useStyles();

    const pollResetHandler = (pollQuestion, pollOptions) => {
        setPollSettings({ pollQuestion, pollOptions });
    };

    return (
        <PollContext.Provider value={pollSettings}>
            <NavBar />
            <div className={classes.content}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <Paper className={classes.paper}>
                                <CreatePollForm
                                    pollResetHandler={pollResetHandler}
                                />
                            </Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </PollContext.Provider>
    );
}

export default App;
