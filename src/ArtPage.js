import React from 'react';
import { useParams } from 'react-router';
import drawings from './data/drawings.js'
import SketchFrame from './SketchFrame';

function ArtPage() {
    let { id }  = useParams();
    let drawing;
    if (id === undefined || id < 1 || id >= drawings.length) {
        drawing = drawings[0];
    } else {
        drawing = drawings.find((drawing) => drawing.id === id);
    }

    return <div>
        {"Drawing number " + id + " is a " + drawing.description}
        <SketchFrame>
            {drawing.sketch()}
        </SketchFrame>
    </div>;
}

export default ArtPage;