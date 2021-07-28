import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "../utils";

export default function breathe(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const mw = wWidth/2, mh = wHeight/2;
    let rotation = 5;
    let rotneg = false;
    let offset=100-45;
    let increase = 2*(rotation%90/90);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
    };

    const draw = p5 => {
        backing(p5);

        p5.stroke(150,50,50);
        p5.line(mw,mh,mw+(50*p5.sin(rotation)),mh+(50*p5.cos(rotation)));
        p5.line(mw,mh,mw+(100*p5.cos(rotation)),mh+(100*p5.sin(rotation)));
        
        p5.stroke(50);
        for (let j = 0;j<20;j++){
            p5.line(mw-offset+(j*10),wHeight/2,mw-100+(j*10),mw-(50*p5.sin((180/20)*j)));
            p5.line(mw-offset+(j*10),wHeight/2,mw-100+(j*10),mw+(50*p5.sin((180/20)*j)));
        }

        if (rotneg){
            offset -= increase;
        } else {
            offset += increase;
        }

        if (rotation%90 === 0){
            rotneg = !rotneg;
        }
        rotation = (rotation%360)+1;
        increase = 2*(rotation%90/90);
    };

    const backing = (p5) => {
        p5.background(135, 206, 235);
        p5.noStroke();
        p5.fill(255);
        p5.ellipse(wWidth/2,wHeight/2,100,50,150);
        p5.stroke(50);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
        p5.line(0,wHeight/2,wWidth,wHeight/2);
    };

    return <BreatheSketch setup={setup} draw={draw} />;
}

class BreatheSketch extends Sketch {}
