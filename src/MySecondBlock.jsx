import { useContext } from "react";
import { ColorContext } from "./App";


function MySecondBlock() {

    const myColor = useContext(ColorContext);

    const blockStyles = {
        backgroundColor: myColor ? 'lightblue' : 'mint',
        color: myColor ? 'white' : 'black',
        padding: '100px',
        margin: '50px'
    }

    return (
        <div style={blockStyles}>
            <p>MY SECOND BLOCK</p>
        </div>
    )
}

export default MySecondBlock