import React from 'react';
import { useParams } from 'react-router';
import drawings from './drawings.js'
import SketchFrame from './SketchFrame';

function ArtPage() {
    let { id }  = useParams();
    let drawing;
    if (id === undefined || id < 1 || id >= drawings.length) {
        drawing = drawings[0];
    } else {
        drawing = drawings[parseInt(id)];
    }

    return <div className={"ArtPage"}>
        {"Drawing number " + id + " is a " + drawing.description}
        <SketchFrame>
            {drawing.sketch()}
        </SketchFrame>
    </div>;
}

export default ArtPage;