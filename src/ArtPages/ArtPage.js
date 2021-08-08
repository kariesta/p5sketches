import React, { useEffect } from 'react';
import SketchFrame from './SketchFrame';
import { drawings } from './drawings.js';
import { useParams } from 'react-router';

function ArtPage() {
    let { id }  = useParams();
    //const []
    let drawing = {description: " "};

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${id} times`;
    });

    let nextId = 0,prevId = drawings.length-1;
    if (id === undefined || id < 0 || id >= drawings.length) {
        id = 0;
        drawing = drawings[0];
        nextId = 1;
    } else {
        drawing = drawings[parseInt(id)];
        nextId = 1 + parseInt(id);
        if (id !== "0"){
            prevId = parseInt(drawing.id)-1
        }
    }
    if (nextId === drawings.length){
        nextId = 0;
    }
    let sketchy = drawing.sketch();

    return <div className={"ArtPage"}>
        <SketchFrame nextId={nextId} prevId={prevId} description={drawing.description} drawId={drawing.id}>
            {sketchy}
        </SketchFrame>
    </div>;
}

export default ArtPage;