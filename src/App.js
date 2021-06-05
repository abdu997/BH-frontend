import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import NavBar from "./components/NavBar";
import CreatePollForm from "./components/CreatePollForm";
import PollForm from "./components/PollForm";
import PollResults from "./components/PollResults";

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
}));

function App() {
    const [pollSettings, setPollSettings] = useState({});
    const classes = useStyles();

    const pollResetHandler = (pollQuestion, pollOptions) => {
        setPollSettings({ pollQuestion, pollOptions });
    };

    const registerVote = (option) => {
        const poll = { ...pollSettings };
        poll["pollOptions"][option]["voteCount"] =
            pollSettings["pollOptions"][option]["voteCount"] + 1;
        setPollSettings(poll);
    };

    return (
        <PollContext.Provider value={pollSettings}>
            <NavBar />
            <div className={classes.content}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <CreatePollForm
                                pollResetHandler={pollResetHandler}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <PollForm registerVote={registerVote} />
                        </Grid>
                        <Grid item md={4}>
                            <PollResults />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </PollContext.Provider>
    );
}

export default App;
