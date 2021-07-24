import React from 'react';
import Sketch from "react-p5";

export default function colorSqrs(){
    const wWidth = 400, wHeight = 400;
    let midtX = 0;
    let midtY = 0;
    let colors = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        //angleMode(DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        midtX = wWidth/2;
        midtY = wHeight/3;
        colors = [
            p5.color(255,110,100),
            p5.color(240,200,10),
            p5.color(255,255,100),
            p5.color(100,255,100),
            p5.color(50,50,250),
            p5.color(50,10,255),
            p5.color(185,10,235)
        ]
    };

    const draw = p5 => {
        p5.background(0);
        p5.stroke(255);
        p5.strokeWeight(5);
        p5.line(p5.mouseX,p5.mouseY,midtX,midtY);
        lightTriangel(p5);
        p5.noStroke();
        p5.fill(255,255,255,230);
        p5.triangle(midtX,midtY*4/5,wWidth/3,midtY*2,wWidth*2/3,midtY*2);
    };

    const lightTriangel = (p5) => {
        p5.strokeWeight(1);
        let offSet = 30;
        for (const col of colors) {
            p5.fill(col);
            p5.stroke(col);
            let horisontal = (wWidth-p5.mouseX)-midtX;
            let vert1 = (p5.mouseY-offSet)-midtY;
            let vert2 = (p5.mouseY-offSet-7)-midtY;
            let ratio1 = vert1/horisontal;
            let ratio2 = vert2/horisontal;
            p5.triangle(midtX,midtY,wWidth,midtY+(wWidth*ratio1),wWidth,midtY+(wWidth*ratio2));
            offSet -= 7;
        }
    };

    return <Sketch setup={setup} draw={draw} />;
}