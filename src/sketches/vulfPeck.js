import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

//TODO more pointy when moving from focal corner
export default function vulfPeck(){
    let heights = 10, steps = 20;
    const [wWidth,wHeight] = calulateDimentions(window);
    const yStart = 10, yMid = wWidth*0.77, yEnd = wWidth-10;
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    const draw = p5 => {
        p5.background(255);
        p5.stroke(255, 167, 2, 170);
        let centerH = heights;
        let mouseDim = 1+(p5.mouseY/wHeight);
        for (let i = 1; i<steps;i++){
            p5.line(yStart,wHeight-heights*i,yMid,wHeight-centerH);
            p5.line(yMid,wHeight-centerH,yEnd,wHeight-heights*i);
            centerH+=heights*(2-(1/i)*mouseDim);
        }
    };

    return <VulfPeckSketch setup={setup} draw={draw} />;
}

class VulfPeckSketch extends Sketch {}

