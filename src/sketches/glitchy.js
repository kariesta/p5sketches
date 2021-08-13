import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function glitchy(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const text = 'Glitchy';
    const offset = 3;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.blendMode(p5.ADD);
    };

    const draw = p5 => {
        p5.erase();
        p5.rect(0,0,wWidth,wHeight);
        p5.noErase();
        p5.background(10,10,10);
        p5.noStroke();
        p5.textSize(90);
        p5.textStyle(p5.BOLD);
        p5.fill(255, 26, 64, 250);
        p5.text(text,(wWidth/6)-offset,wHeight/2);
        p5.fill(26, 130, 255, 250);
        p5.text(text,(wWidth/6)+offset,wHeight/2);
        p5.fill(255);
        p5.text(text,(wWidth/6),wHeight/2);
        //TODO add lines of offset image
        //maybe use https://www.npmjs.com/package/p5.glitch
    };

    return <GlitchySketch setup={setup} draw={draw} />;
}

class GlitchySketch extends Sketch {}

