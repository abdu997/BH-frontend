import React from "react";

const PollContext = React.createContext({
    pollQuestion: "",
    pollOptions: [],
});

export default PollContext;
