import React from 'react';
import { useParams } from 'react-router';
import drawings from './drawings.js'
import SketchFrame from './SketchFrame';

function ArtPage() {

    return <div className={"ArtPage"}>
        {"reload siden for plettfri skisse"}
        <SketchFrame/>
    </div>;
}

export default ArtPage;