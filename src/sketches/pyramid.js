import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions, frame, pointInFrame} from "./utils";

export default function pyramid(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const padding = wWidth*0.1;
    const triangleModes = {CENTER:'center',TWIRL:'twirl',AROUND: 'around'};
    const sideLength = wWidth*0.7, heightLength= sideLength*0.866;
    const topp = (wHeight-heightLength)/2, bottom = topp+heightLength;
    const left = (wWidth-sideLength)/2, mid = left+(sideLength/2), right = left+sideLength;
    let upperLeft,upperRight,lower;
    let triangleMode = triangleModes.CENTER;
    let lineCount = 9;
    let bColor = 250 ,triangleColor = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        bColor = p5.color(200,230,222);
        triangleColor = p5.color(100,130,122,150);
        upperLeft = p5.createVector(left,topp);
        upperRight = p5.createVector(right,topp);
        lower =  p5.createVector(mid,bottom);
    };

    const draw = p5 => {
        p5.background(bColor);

        p5.strokeWeight(1);
        p5.stroke(0,0,0,80);
        p5.fill(triangleColor);

        switch (triangleMode) {
            case triangleModes.CENTER:
                centerPyramid(p5);
                break;
            case triangleModes.AROUND:
                aroundPyramid(p5);
                break;
            case triangleModes.TWIRL:
                twirlPyramid(p5);
                break;
            default:
                centerPyramid(p5);
        }
        //Final frame
        frame(p5,bColor,triangleColor,padding,wWidth,wHeight);
    };

    const centerPyramid = (p5) => {
        let stepsLeft = lower.copy(), stepsRight =upperRight.copy(), stepsTop =upperLeft.copy();
        stepsLeft.sub(upperLeft).div(lineCount);
        stepsRight.sub(lower).div(lineCount);
        stepsTop.sub(upperRight).div(lineCount);
        let nextLeftStart = upperLeft.copy(),nextRightStart = lower.copy(), nextTopStart = upperRight.copy();

        for( let i = 0; i<lineCount;i++){
            p5.line(nextLeftStart.x,nextLeftStart.y,p5.mouseX,p5.mouseY);
            nextLeftStart = nextLeftStart.add(stepsLeft);
            p5.line(nextRightStart.x,nextRightStart.y,p5.mouseX,p5.mouseY);
            nextRightStart = nextRightStart.add(stepsRight);
            p5.line(nextTopStart.x,nextTopStart.y,p5.mouseX,p5.mouseY);
            nextTopStart = nextTopStart.add(stepsTop);
        }
    };

    const aroundPyramid = (p5) => {
        let mouseVector = p5.createVector(p5.mouseX,p5.mouseY);
        let stepsLower = mouseVector.copy(), stepsRight =mouseVector.copy(), stepsLeft =mouseVector.copy();

        stepsLeft.sub(upperLeft).div(lineCount);
        stepsRight.sub(upperRight).div(lineCount);
        stepsLower.sub(lower).div(lineCount);
        let nextLeftStart = upperLeft.copy(),nextRightStart = upperRight.copy(), nextLowerStart = lower.copy();

        for( let i = 0; i<lineCount;i++){
            p5.triangle(nextRightStart.x,nextRightStart.y,nextLeftStart.x,nextLeftStart.y,nextLowerStart.x,nextLowerStart.y);
            nextLeftStart = nextLeftStart.add(stepsLeft);
            nextRightStart = nextRightStart.add(stepsRight);
            nextLowerStart = nextLowerStart.add(stepsLower);
        }
    };

    const twirlPyramid = (p5) => {
        let mouseVector = p5.createVector(p5.mouseX,p5.mouseY);
        let stepsLowerToM = lower.copy(), stepsRightToM = upperRight.copy(), stepsLeftToM =upperLeft.copy();
        let stepsLowerToR = lower.copy(), stepsUpperToR = upperRight.copy(), stepsLeftToL =upperLeft.copy();

        stepsLowerToM.sub(mouseVector).div(lineCount);
        stepsLowerToR.sub(upperRight).div(lineCount);

        stepsRightToM.sub(mouseVector).div(lineCount);
        stepsUpperToR.sub(upperLeft).div(lineCount);

        stepsLeftToM.sub(mouseVector).div(lineCount);
        stepsLeftToL.sub(lower).div(lineCount);

        //første punkt er en prikk.
        //andre punkt fra midten av bakken til midten av hjørnet til mousepoint.

        let nextRightSideStart = lower.copy(), nextLowerToMouseStart = lower.copy();
        let nextUpperSideStart = upperRight.copy(), nextRightToMouseStart = upperRight.copy();
        let nextLeftSideStart = upperLeft.copy(), nextLeftToMouseStart = upperLeft.copy();

        for( let i = 0; i<lineCount;i++){
            p5.line(nextRightSideStart.x,nextRightSideStart.y,nextLowerToMouseStart.x,nextLowerToMouseStart.y);
            nextRightSideStart.sub(stepsLowerToR);
            nextLowerToMouseStart.sub(stepsLowerToM);

            p5.line(nextUpperSideStart.x,nextUpperSideStart.y,nextRightToMouseStart.x,nextRightToMouseStart.y);
            nextUpperSideStart.sub(stepsUpperToR);
            nextRightToMouseStart.sub(stepsRightToM);

            p5.line(nextLeftSideStart.x,nextLeftSideStart.y,nextLeftToMouseStart.x,nextLeftToMouseStart.y);
            nextLeftSideStart.sub(stepsLeftToL);
            nextLeftToMouseStart.sub(stepsLeftToM);
        }
    };

    const mousePressed = (p5) => {
        if(pointInFrame(wWidth,wHeight,padding,p5.mouseX,p5.mouseY)){
            lineCount++;
        } else {
            lineCount = 3;
            switch (triangleMode) {
                case triangleModes.CENTER:
                    triangleMode = triangleModes.AROUND;
                    break;
                case triangleModes.AROUND:
                    triangleMode = triangleModes.TWIRL;
                    break;
                case triangleModes.TWIRL:
                    triangleMode = triangleModes.CENTER;
                    break;
                default:
                    triangleMode = triangleModes.CENTER;
            }
        }
    };

    return <PyramidSketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}

class PyramidSketch extends Sketch {}