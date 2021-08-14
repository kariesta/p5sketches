import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

//TODO honningbarna opp de ny blanke
export default function honningbarna(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.colorMode(p5.HSB,100);
        p5.background(17, 100, 100);
        p5.textAlign(p5.CENTER);
        p5.noStroke();
    };

    const draw = p5 => {
        if(moves<500){
            for(let i = 0; i<10; i++) {
                p5.fill(p5.random(0,100), 100,100);
                p5.ellipse(p5.random(0,wWidth), p5.random(0,wHeight), 10);
            }
            for(let i = 0; i<3; i++) {
                p5.fill(p5.random(0,100), 100,40);
                p5.ellipse(p5.random(0,wWidth), p5.random(0,wHeight), 10);
            }
            moves++;
        } else {
            p5.fill(0,0,100);
            p5.stroke(0,0,100);
            p5.textSize(40);
            p5.text('HONNINGBARNA',wWidth*0.5,wHeight*0.45);
            p5.textSize(32);
            p5.text('OPP DE NYE BLANKE',wWidth*0.5,wHeight*0.55);
        }
    };

    return <HonningbarnaSketch setup={setup} draw={draw} />;
}

class HonningbarnaSketch extends Sketch {}

