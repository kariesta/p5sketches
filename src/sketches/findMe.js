import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

//TODO make colours change across spring
export default function findMe(){
    const [wWidth,wHeight] = calulateDimentions(window);
    let startColor, endColor, centerV, upperV, lowerV;
    const radius = 300;
    let detailMode = 0;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.colorMode(p5.HSB,100);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
    };

    const draw = p5 => {
        p5.background(5);
        p5.stroke(255, 217, 2, 170);
        p5.strokeWeight(5);
        p5.noFill();
        startColor = p5.color(2,100,100);
        endColor = p5.color(20,100,100);
        centerV = p5.createVector(-100,-10);
        upperV = p5.createVector(0,-10);
        lowerV = p5.createVector(-180,30);

        switch (detailMode) {
            case 0:
                lowSpring(p5,centerV,95,10);
                break;
            case 1:
                mediumSpring(p5,centerV,95,10, 12);
                break;
            default:
                highSpring(p5,centerV,95,10, 12,upperV,lowerV);
        }

        startColor = p5.color(35,100,100);
        endColor = p5.color(71,100,100);
        centerV = p5.createVector(wWidth+100,-10);
        upperV = p5.createVector(wWidth,-10);
        lowerV = p5.createVector(wWidth+180,30);
        switch (detailMode) {
            case 0:
                lowSpring(p5,centerV,-98,-2);
                lowText(p5);
                break;
            case 1:
                mediumSpring(p5,centerV,-98,-2, 15);
                mediumText(p5);
                break;
            default:
                highSpring(p5,centerV,-98,-2, 15,upperV,lowerV);
                highText(p5);
        }
    };

    const lowSpring = (p5,center,start,end) => {
        mediumSpring(p5,center,start,end,300);
    };

    const lowText = (p5) => {
        p5.stroke(255);
        p5.strokeWeight(5);
        p5.fill(255);
        p5.textSize(56);
        p5.textAlign(p5.CENTER);
        p5.text("#### ##",wWidth/2,wHeight*3/4);
    };

    const mediumSpring = (p5,center,start,end,steps) => {
        //calc last lines
        let inc = (end-start)/steps;
        let colorInc = 1/steps;
        for (let i = 0;i<steps;i++){
            let angle = start+i*inc;
            p5.stroke(p5.lerpColor(startColor,endColor, colorInc*i));
            p5.line(center.x,center.y,center.x+radius*p5.sin(angle),center.y+radius*p5.cos(angle));
        }
    };

    const mediumText = (p5) => {
        p5.stroke(255);
        p5.strokeWeight(2);
        p5.fill(255);
        p5.textSize(56);
        p5.textAlign(p5.CENTER);
        p5.text("Find me",wWidth/2,wHeight*3/4);
    };

    const highSpring = (p5,center,start,end,steps,upperFocal,lowerFocal) => {
        //calc last lines
        let inc = (end-start)/steps;
        let colorInc = 1/steps;
        for (let i = 0;i<steps;i++){
            let angle = start+i*inc;
            p5.stroke(p5.lerpColor(startColor,endColor, colorInc*i));
            //p5.line(center.x,center.y,center.x+radius*p5.sin(angle),center.y+radius*p5.cos(angle));
            p5.curve(upperFocal.x,upperFocal.y,center.x,center.y,center.x+radius*p5.sin(angle),center.y+radius*p5.cos(angle),upperFocal.x,upperFocal.y);
            p5.stroke(p5.lerpColor(startColor,endColor, colorInc*i));
        }
        for (let i = 0;i<steps;i++){
            let angle = start+i*inc;
            let c = p5.lerpColor(startColor,endColor, colorInc*i);
            c.setAlpha(60);
            //p5.line(center.x,center.y,center.x+radius*p5.sin(angle),center.y+radius*p5.cos(angle));
            p5.stroke(c);
            p5.curve(lowerFocal.x,lowerFocal.y,center.x,center.y,center.x+radius*p5.sin(angle),center.y+radius*p5.cos(angle),lowerFocal.x,lowerFocal.y);
        }
        //first draw bottom curves, then draw uppercurves.
        //maybe use rotate? and push/pop
    };

    const highText = (p5) => {
        p5.stroke(255);
        p5.strokeWeight(1);
        p5.noFill();
        p5.textSize(56);
        p5.textAlign(p5.CENTER);
        p5.text("Find me",wWidth/2,wHeight*3/4);
    };

    const mousePressed = () => {
        detailMode = (detailMode+1)%3;
    };

    return <FindMeSketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}

class FindMeSketch extends Sketch {}

