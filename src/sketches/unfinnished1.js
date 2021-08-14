import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function unfinished1(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
    };

    const draw = p5 => {
        p5.background(20, 20, 20);
        p5.stroke(255, 227, 2, 170);

        p5.line(0,wHeight/2,p5.mouseX,p5.mouseY);

        moves++;
        if(moves>wWidth*1.5){
            moves = -99;
        }
    };

    return <Unfinished1Sketch setup={setup} draw={draw} />;
}

class Unfinished1Sketch extends Sketch {}

