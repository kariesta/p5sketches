import React from 'react';
import drawings from './drawings.js';
import { useParams } from 'react-router';

function SketchFrame(props) {
    let { id }  = useParams();
    let drawing = {description: " "};
    let nextId = 0;
    if (id === undefined || id < 0 || id >= drawings.length) {
        drawing = drawings[0];
        nextId = 1;
        console.log(drawing);
    } else {
        drawing = drawings[parseInt(id)];
        nextId = 1 + parseInt(id);
        console.log(drawing);
    }
    if (nextId === drawings.length){
        nextId = 0;
    }
    console.log(drawing);
    return <div className={"SketchFrame"}>
        <a href={"#/"+(nextId)}><h2>Next</h2></a>
        {drawing.sketch()}
        <div className={"descriptionCard"}>
            <p>{drawing.description}</p>
        </div>
    </div>;
}

export default SketchFrame;