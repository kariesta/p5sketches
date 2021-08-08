import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function water(){
    let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);
    let noiseScale =0.005;
    let noiseVal;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
    };

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.noStroke();
        p5.fill(255, 217, 2, 170);
        //p5.ellipse(100+moves, 100+moves, 100+moves);
        //p5.ellipse(300, 120, 100);
        moves+=5;
        if(moves >= 180){
            moves = 0;
        }

        for (let y = 0; y < wHeight; y++) {
            for (let x = 0; x < wWidth; x++) {
                // noiseDetail of the pixels octave count and falloff value
                p5.noiseDetail(5, 0.5);
                noiseVal = p5.noise( x * noiseScale, y * noiseScale);
                if(noiseVal>p5.sin(moves)){
                    p5.stroke(42,111,219);
                } else if(noiseVal>p5.sin(moves-20)){
                    p5.stroke(129,233,230);
                } else {
                    p5.stroke(255);
                }
                //p5.stroke(noiseVal*255);
                p5.point(x, y);
            }
        }


    };

    return <WaterSketch setup={setup} draw={draw} />;
}

class WaterSketch extends Sketch {}

