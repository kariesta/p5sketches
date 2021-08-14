import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function unfinished3(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    const draw = p5 => {
        p5.background(63,165,215);
        p5.noStroke();
        p5.fill(20, 20, 18);
        p5.rect(wWidth-moves,wHeight*0.3,-5,-15);
        p5.fill(255,58, 28);
        p5.stroke(255,58, 28);
        p5.strokeCap(p5.ROUND);
        p5.strokeWeight(5);
        p5.quad(wWidth*0.3,wHeight*0.3,
            wWidth,wHeight*0.3,
            wWidth,wHeight,
            wWidth*0.45,wHeight);
        moves++;
        if(moves>wWidth*1.5){
            moves = -99;
        }
    };

    return <Unfinished3Sketch setup={setup} draw={draw} />;
}

class Unfinished3Sketch extends Sketch {}

