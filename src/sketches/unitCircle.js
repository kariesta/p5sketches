import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions, inputField} from "./utils";

export default function unitCircle(){
    const [wWidth,wHeight] = calulateDimentions(window);
    const radius = wWidth*0.35;
    let degree = 0;
    let inputDegrees = 0;
    let centerV;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        inputDegrees = inputField(p5, canvasParentRef, degree, 50, 50, 30);
        centerV = p5.createVector(wWidth/2,wHeight/2);
    };

    const draw = p5 => {
        backing(p5);

        calculations(p5);
        if(p5.mouseIsPressed){
            //degrefrom mouse
            let mouseV = p5.createVector(p5.mouseX,p5.mouseY);
            let hyp = centerV.dist(mouseV);
            let dir = -(centerV.y-mouseV.y)/p5.abs(centerV.y-mouseV.y);
            degree = (dir * p5.acos((mouseV.x-centerV.x)/hyp))%360;
            inputDegrees.value(degree);
        } else if (degree !== parseInt(inputDegrees.value()) && inputDegrees.value() !== ""){
            degree = parseInt(inputDegrees.value());
        }
    };

    const calculations = (p5) => {
        let xEnd = centerV.x+(radius*p5.cos(degree));
        let yEnd = centerV.y+(radius*p5.sin(degree));
        p5.strokeWeight(3);
        p5.stroke(88, 179, 104);
        p5.line(centerV.x,centerV.y,xEnd,yEnd);
        p5.strokeWeight(1);
        p5.text(" cosinus:"+p5.cos(degree) +"\n    sinus:"+p5.sin(degree), wWidth-100, wHeight-50);
    };

    const backing = (p5) => {
        p5.background(218, 216, 115);
        p5.noStroke();
        p5.fill(239, 238, 180, 170);
        p5.ellipse(wWidth/2, wHeight/2, wWidth*0.7);

        p5.stroke(69,77,102,50);
        p5.strokeWeight(1);
        p5.noFill();
        p5.line(0,wHeight/2,wWidth,wHeight/2);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
    };

    return <SimpleSketch setup={setup} draw={draw} />;
}

class SimpleSketch extends Sketch {}

