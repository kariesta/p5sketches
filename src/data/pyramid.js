import React from 'react';
import Sketch from "react-p5";

export default function pyramid(){
    const wWidth = 400, wHeight = 400;

    let lineCount = 9; //linenumber
    let sideLength = 280;
    //let topp;let left;let right;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef)
    };

    const draw = p5 => {
        p5.background(255, 130, 20);

        p5.strokeWeight(1);
        p5.stroke(0,0,0,80);
        p5.background(200,230,222);
        p5.fill(100,130,122);
        //offset of coorinates
        let unitDistance = (sideLength/lineCount);
        let xOffset = unitDistance*0.5;
        let yOffset = xOffset*Math.sqrt(3);
        //3 arrays of coordinates, one for each side.
        //draw the lines from line coordinates to x
        for (let i = 0; i < lineCount; i++) {
            p5.line(40+(unitDistance*i),60,p5.mouseX,p5.mouseY); //top
            p5.line(40+(xOffset*i),60+(yOffset*i),p5.mouseX,p5.mouseY); //left
            p5.line(40+sideLength-(xOffset*i),60+(yOffset*i),p5.mouseX,p5.mouseY); //right
        }
        //draw the frame around
        //Final frame
        p5.noStroke();
        p5.fill(200,230,222);
        p5.rect(0,0,20,400);
        p5.rect(0,0,400,20);
        p5.rect(0,340,450,100);
        p5.rect(340,0,500,4500);
        p5.stroke(0,0,0,80);
        p5.strokeWeight(4);
        p5.noFill();
        p5.rect(20,20,320,320);
    };

    const mousePressed = (p5) => {
        if(p5.mouseX%340>20 && p5.mouseY%340>20){
            lineCount++;
        } else {
            lineCount = 1;
        }
    };

    return <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}