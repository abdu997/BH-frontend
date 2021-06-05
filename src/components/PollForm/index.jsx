import PropTypes from "prop-types";
import { useState, useContext } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

import PollContext from "../../utils/PollContext";

// Builds out the voting form
function PollForm({ registerVote }) {
    // Poll radio select value
    const [value, setValue] = useState("");

    // Get poll settings from context store
    const { pollQuestion, pollOptions } = useContext(PollContext);

    // Passes the select poll option to the higher component and resets the voting form
    const handleVote = (e) => {
        e.preventDefault();
        registerVote(value);
        setValue("");
    };

    // return an empty component if poll settings context is empty
    if (!pollOptions) return null;
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend"> {pollQuestion}</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {pollOptions.map(({ title }, index) => (
                        <FormControlLabel
                            key={index}
                            value={index.toString()}
                            control={<Radio />}
                            label={title}
                        />
                    ))}
                </RadioGroup>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleVote}
                >
                    Vote
                </Button>
            </FormControl>
        </>
    );
}

PollForm.propTypes = {
    registerVote: PropTypes.func,
};

export default PollForm;
