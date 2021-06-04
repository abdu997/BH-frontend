import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();

    return (
        <>
            <NavBar />
        </>
    );
}

export default App;
