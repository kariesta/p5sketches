import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions, drawLine, inputField} from "./utils";

export default function sinuswave(){
    let degrees = 0;
    let degreeInc = 1;
    const [wWidth,wHeight] = calulateDimentions(window);
    const radius = wWidth/8;
    let center;
    const xedge = wWidth*2/3, yedge = wHeight/3;
    let xpoints = [], ypoints = [], tanPoints = [];
    let inputDegrees;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        //p5.frameRate(1);
        center = p5.createVector(wWidth*5/6,wHeight/6);
        inputDegrees = inputField(p5, canvasParentRef, degreeInc, 60, 65, 30);
    };

    const draw = p5 => {
        p5.background(69, 77, 102);
        if (inputDegrees.value() !== degreeInc && inputDegrees.value()!== ''){
            degreeInc = inputDegrees.value();
        }

        let xcoor = center.y+radius*p5.cos(degrees);
        let ycoor = center.x+radius*p5.sin(degrees);

        xpoints.push(p5.createVector(xedge,xcoor));
        ypoints.push(p5.createVector(ycoor,yedge));

        circling(p5,xcoor,ycoor);
        p5.stroke(218, 216, 115);
        drawPoints(p5,xpoints,p5.createVector(-1,0));
        drawPoints(p5,ypoints,p5.createVector(0,1));

        let tanEnd = p5.createVector(xedge,yedge+radius);
        let tanStart = p5.createVector(xedge-radius,yedge);
        let tanStrength = tanEnd.copy().sub(tanStart).mult(p5.tan(degrees));
        tanPoints.push(p5.createVector(tanStart.x+tanStrength.x,tanStart.y+tanStrength.y));
        p5.stroke(218, 216, 115,100);
        drawPoints(p5,tanPoints,p5.createVector(-1,1));

        degrees = (degrees+parseInt(degreeInc))%360;
    };

    const circling = (p5,xline,yline) => {
        p5.noStroke();
        p5.fill(48, 153, 117);
        p5.ellipse(center.x,center.y,radius*2,radius*2);
        p5.stroke(88, 179, 104);
        p5.line(center.x,center.y,yline,xline);

        p5.strokeWeight(2);
        p5.stroke(218, 216, 115);
        p5.line(xedge,xline,yline,xline);
        p5.line(yline,yedge,yline,xline);
    };

    const drawPoints = (p5, pointArray, direction) => {
        //delete outside points
        pointArray = pointArray.filter(point => {
            return point.x < wWidth+5 &&
                point.x > -5 &&
                point.y < wHeight+5 &&
                point.y > -5

        });
        //move points
        pointArray.forEach(point => {
            point.x += direction.x;
            point.y += direction.y;
            //p5.point(point.x,point.y);
        });
        //draw line between points
        drawLine(p5,pointArray);
    };

    return <SimpleSketch setup={setup} draw={draw} />;
}

class SimpleSketch extends Sketch {}

