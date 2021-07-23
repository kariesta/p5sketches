import React from 'react';
import Sketch from "react-p5";

export default function splat(){
    const wWidth = 400, wHeight = 400;
    let splat = [];


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    const draw = p5 => {
        p5.background(255);
        p5.noStroke();
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
            let meanY = p5.mouseY;//not actually needed in this code atm, but fancy
            let standardDeviation = 50;
            let x = standardDeviation * numX + meanX;
            let y = standardDeviation * numY + meanY;
            splat.push([x, y, 10/numX, 10/numX]); //only numX because numX with numY makes very long ellipses,could be fun though, try it yourself.
        }
    };

    return <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}