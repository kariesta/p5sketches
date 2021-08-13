import React from 'react';
import DescriptionCard from "./DescriptionCard";

//TODO use link instead?
function SketchFrame(props) {
    //console.log(props.prevId);
    return <div className={"SketchFrame"}>
        <div className={"SketchNav"}>
            <a href={".#/post/"+(props.prevId)}><h2>Prev</h2></a>
            <a href={".#/list"}><h2>List</h2></a>
            <a href={".#/post/"+(props.nextId)}><h2>Next</h2></a>
        </div>
        <div className={"SketchWall"}>
            {props.children}
            <DescriptionCard description={props.drawing.description} categories={props.drawing.categories}/>
        </div>
    </div>;
}
/*        <a href={".#/"+(props.nextId)} onClick={forceUpdate}><h2>Next</h2></a>
*/

export default SketchFrame;