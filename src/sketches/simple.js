import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function simple(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.noStroke();
        p5.fill(255, 217, 2, 170);
        p5.ellipse(100+moves, 100+moves, 100+moves);
        p5.ellipse(300, 120, 100);
        moves++;
        if(moves>wWidth*1.5){
            moves = -99;
        }
    };

    return <SimpleSketch setup={setup} draw={draw} />;
}

class SimpleSketch extends Sketch {}

