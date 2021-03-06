import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function splat(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let splat = [];


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        p5.textAlign(p5.CENTER,p5.CENTER);
    };

    const draw = p5 => {
        p5.background(255);
        p5.noStroke();
        if (splat.length === 0){
            p5.fill(135,206,235);
            p5.textSize(32);
            p5.text('click me',wWidth/2,wHeight/2);
        }
        p5.fill(135,206,235,50);
        for (let i = 1; i < splat.length; i++) {    //drawing all circles
            p5.ellipse(splat[i][0], splat[i][1], splat[i][2], splat[i][3]);
        }
    };

    const mousePressed = (p5) => {
        for (let i= 1; i < 20; i++){    //making 20 circles
            let numX = p5.randomGaussian(0,1);
            let numY = p5.randomGaussian(0,1);   //20 gaussian spread numbers
            let meanX = p5.mouseX;
            let meanY = p5.mouseY;//not actually needed in this code atm, but for future ideas
            let standardDeviation = 50;
            let x = standardDeviation * numX + meanX;
            let y = standardDeviation * numY + meanY;
            splat.push([x, y, 10/numX, 10/numX]); //only numX because numX with numY makes very long ellipses,could be fun though, try it yourself.
        }
    };

    return <SplatSketch  className={"sketchy2"}  setup={setup} draw={draw} mousePressed={mousePressed}/>;
}

class SplatSketch extends Sketch {}