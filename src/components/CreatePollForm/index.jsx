import PropTypes from "prop-types";
import { useState, useReducer, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

// Poll reducer to handle changes in poll options
function pollOptionsReducer(state, action) {
    let options;
    switch (action.type) {
        case "ADD_OPTION":
            // Append new option
            return [...state, { title: action.option }];
        case "EDIT_OPTION":
            // Create new variable that will replace state, update option using its index
            options = [...state];
            options[action.index] = {
                title: action.option,
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
    const [disableReset, setDisableReset] = useState(false);

    const [pollOptions, dispatchPollOptions] = useReducer(
        pollOptionsReducer,
        []
    );

    // Whenever state changes, disable reset button if the question or any option title is longer than 80 chars or there are more than 10 options or less than 2
    useEffect(() => {
        if (pollOptions.length > 10 || pollOptions.length < 2) {
            setDisableReset(true);
            return;
        }
        if (question.length > 80 || question.length === 0) {
            setDisableReset(true);
            return;
        }
        for (let option of pollOptions) {
            if (option.title.length > 80 || option.title.length === 0) {
                setDisableReset(true);
                return;
            }
        }

        setDisableReset(false);
    }, [pollOptions, question]);

    // Adds new option and empties add option field
    const addOption = (e) => {
        e.preventDefault();
        dispatchPollOptions({ type: "ADD_OPTION", option: newOption });
        setNewOption("");
    };

    // Empties vote counts and passes new question and options to higher component
    const resetPoll = (e) => {
        e.preventDefault();
        const options = pollOptions.map((option) => {
            option["voteCount"] = 0;
            return option;
        });
        pollResetHandler(question, options);
    };

    return (
        <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    label="Poll Question"
                    fullWidth
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    error={question.length > 80}
                    helperText={
                        question.length > 80
                            ? "This field has an 80 character limit"
                            : ""
                    }
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
                                error={pollOptions[index].title.length > 80}
                                helperText={
                                    pollOptions[index].title.length > 80
                                        ? "This field has an 80 character limit"
                                        : ""
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
                        error={newOption.length > 80}
                        helperText={
                            newOption.length > 80
                                ? "This field has an 80 character limit"
                                : ""
                        }
                        disabled={pollOptions.length >= 10}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.pollButton}
                        onClick={addOption}
                        disabled={
                            pollOptions.length >= 10 ||
                            newOption.length > 80 ||
                            newOption.length === 0
                        }
                    >
                        Add
                    </Button>
                </div>
                <Grid container>
                    <Grid item sm={9} className={classes.optionsCounter}>
                        <Typography align={"left"}>
                            {pollOptions.length < 2
                                ? "Poll must have at least 2 options"
                                : pollOptions.length + "/10 possible answers"}
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={resetPoll}
                            disabled={disableReset}
                        >
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

CreatePollForm.propTypes = {
    pollResetHandler: PropTypes.func.isRequired,
};

export default CreatePollForm;
