import React from 'react';
import drawings from './data/drawings.js';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";


function SketchFrame(props) {
    let { id }  = useParams();
    let drawing = {description: " "};
    let nextId = 0;
    if (id === undefined || id < 0 || id >= drawings.length) {
        drawing = drawings[0];
        nextId = 0;
        console.log(drawing);
    } else {
        drawing = drawings.find((drawing) => drawing.id === id);
        nextId = 1 + parseInt(id);
        console.log(drawing);
    }
    if (nextId === drawings.length){
        nextId = 0;
    }
    console.log(drawing);
    return <div>
        <Link to={"/"+(nextId)}><h2>Next</h2></Link>
        {props.children}
        <p>{drawing.description}</p>
    </div>;
}

export default SketchFrame;