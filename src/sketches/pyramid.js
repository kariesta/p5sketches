import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions, frame, pointInFrame} from "../utils";

//TODO utvide med vertikale trekanter istede for horisontale streker.
export default function pyramid(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const padding = 40;
    let lineCount = 9; //linenumber
    let sideLength = 280;
    let bColor = 250 ,triangleColor = 0;
    //let topp;let left;let right;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        bColor = p5.color(200,230,222);
        triangleColor = p5.color(100,130,122);
    };

    const draw = p5 => {
        console.log(bColor);
        p5.background(bColor);

        p5.strokeWeight(1);
        p5.stroke(0,0,0,80);
        p5.fill(triangleColor);
        //offset of coorinates
        let unitDistance = (sideLength/lineCount);
        let xOffset = unitDistance*0.5;
        let yOffset = xOffset*Math.sqrt(3);
        let triangleCornerX = (wWidth-sideLength)/2;
        let triangleCornerY = (wHeight-(sideLength-20))/2;

        //3 arrays of coordinates, one for each side.
        //draw the lines from line coordinates to x
        for (let i = 0; i < lineCount; i++) {
            p5.line(triangleCornerX+(unitDistance*i),triangleCornerY,p5.mouseX,p5.mouseY); //top
            p5.line(triangleCornerX+(xOffset*i),triangleCornerY+(yOffset*i),p5.mouseX,p5.mouseY); //left
            p5.line(triangleCornerX+sideLength-(xOffset*i),triangleCornerY+(yOffset*i),p5.mouseX,p5.mouseY); //right
        }
        //Final frame
        frame(p5,bColor,triangleColor,padding,wWidth,wHeight);
    };

    const mousePressed = (p5) => {
        if(pointInFrame(wWidth,wHeight,padding,p5.mouseX,p5.mouseY)){
            lineCount++;
        } else {
            lineCount = 1;
        }
    };

    return <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}