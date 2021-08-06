import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function wavey(){
    //let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    //todo click and drag bezier
    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.stroke(255);
        p5.fill(255, 217, 2, 50);

        for(let i = 0; i<5;i++){
            oneWave(p5,10+(i*8),10,80+(i*8),80);
            oneWave(p5,13+(i*8),10,83+(i*8),80);
        }
        /* oneWave(p5,100,100,300,300);
        oneWave(p5,100+5,100,300+5,300);
        oneWave(p5,100+12,100,300+12,300);
        */

        //smallere versjon
        oneWave(p5, 0, wHeight/2,wWidth/4,wHeight);
        //small med like store vekter
        let start = [wWidth,0], end = [wWidth*0.75,wHeight/2];
        let strengt = wWidth/2;
        p5.bezier(start[0],start[1],start[0]-strengt,start[1],
            end[0]+strengt,end[1],end[0],end[1]);
        //
    };

    const oneWave = (p5,x1,y1,x2,y2) => {
        p5.stroke(255);
        //p5.line(x2, y1, x1, y1);
        //p5.line(x2, y2, x1, y2);
        p5.stroke(0, 0, 0);
        p5.bezier(x2, y1, x1, y1, x2, y2, x1, y2);
    };

    return <WaveySketch setup={setup} draw={draw} />;
}

class WaveySketch extends Sketch {}

