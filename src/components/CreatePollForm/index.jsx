import PropTypes from "prop-types";
import { useState, useReducer } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& .MuiTextField-root": {
            margin: theme.spacing(1, 0),
        },
        "& .MuiButton-root": {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    pollOption: {
        width: "80%",
    },
    pollButton: {
        width: "10%",
        marginLeft: theme.spacing(1),
    },
    optionsCounter: {
        margin: "auto",
    },
}));

// Poll reducer to handle changes in poll options
function pollOptionsReducer(state, action) {
    let options;
    switch (action.type) {
        case "ADD_OPTION":
            // Append new option
            return [...state, { title: action.option, voteCount: 0 }];
        case "EDIT_OPTION":
            // Create new variable that will replace state, update option using its index
            options = [...state];
            options[action.index] = {
                title: action.option,
                voteCount: 0,
            };
            return options;
        case "REMOVE_OPTION":
            // Create new variable that will replace state, delete option element using its index
            options = [...state];
            options.splice(action.index, 1);
            return options;
        default:
            return;
    }
}

// Component to generate a new poll
function CreatePollForm({ pollResetHandler }) {
    const classes = useStyles();
    const [question, setQuestion] = useState("");
    const [newOption, setNewOption] = useState("");

    const [pollOptions, dispatchPollOptions] = useReducer(
        pollOptionsReducer,
        []
    );

    // Adds new option and empties add option field
    const addOption = (e) => {
        e.preventDefault();
        dispatchPollOptions({ type: "ADD_OPTION", option: newOption });
        setNewOption("");
    };

    // Passes new question and options to higher component
    const resetPoll = (e) => {
        e.preventDefault();
        pollResetHandler(question, pollOptions);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                label="Poll Question"
                fullWidth
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            {pollOptions &&
                pollOptions.map(({ title }, index) => (
                    <div key={index}>
                        <TextField
                            label={"Option #" + (index + 1)}
                            className={classes.pollOption}
                            value={title}
                            onChange={(e) =>
                                dispatchPollOptions({
                                    type: "EDIT_OPTION",
                                    index: index,
                                    option: e.target.value,
                                })
                            }
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.pollButton}
                            onClick={() =>
                                dispatchPollOptions({
                                    type: "REMOVE_OPTION",
                                    index: index,
                                })
                            }
                        >
                            <ClearIcon />
                        </Button>
                    </div>
                ))}
            <div>
                <TextField
                    label="Add Option"
                    className={classes.pollOption}
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.pollButton}
                    onClick={addOption}
                >
                    Add
                </Button>
            </div>
            <Grid container>
                <Grid item xs={9} className={classes.optionsCounter}>
                    <Typography align={"left"}>
                        {pollOptions.length}/10 possible answers
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={resetPoll}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

CreatePollForm.propTypes = {
    pollResetHandler: PropTypes.func.isRequired,
};

export default CreatePollForm;
