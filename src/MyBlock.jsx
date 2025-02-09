import { useContext } from "react";
import { ColorContext } from "./App";

function MyBlock() {

    const myColor = useContext(ColorContext);
   
    const blockColors = {
        backgroundColor: myColor ? 'pink' : 'lightgreen',
        color: myColor ? 'white' : 'black',
        padding: '100px',
        margin: '50px'
    }
   
    return (
        <div style={blockColors}>
            <p>MY BLOCK</p>
        </div>
    )
}

export default MyBlock