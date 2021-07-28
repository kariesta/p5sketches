import React, { useState } from 'react';

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    console.log("forced");
    return () => setValue(value => value + 1); // update the state to force render
}

function SketchFrame(props) {
    const forceUpdate = useForceUpdate();
    console.log(props.prevId);
    return <div className={"SketchFrame"}>
        <div className={"SketchNav"}>
            <a href={".#/"+(props.prevId)}><h2>Prev</h2></a>
            <a href={".#/"+(props.nextId)}><h2>Next</h2></a>
        </div>
        <div className={"SketchWall"}>
            {props.children}
            <div className={"descriptionCard"}>
                <p>{props.description}</p>
            </div>
        </div>
    </div>;
}
/*        <a href={".#/"+(props.nextId)} onClick={forceUpdate}><h2>Next</h2></a>
*/

export default SketchFrame;