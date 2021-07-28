import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "../utils";

export default function simple(){
    let rotation = 5;
    const [wWidth,wHeight] = calulateDimentions(window);


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
    };

    const draw = p5 => {
        p5.background(135, 206, 235);
        p5.noStroke();
        p5.fill(255);
        p5.ellipse(wWidth/2,wHeight/2,100,50,150);
        p5.stroke(240,100,100);
        let w = 180;
        let h = 100;
        for (let i = 0; i<360;i+=5){
            let length = Math.sqrt(Math.pow(w*p5.sin(i),2)+Math.pow(h*p5.cos(i),2));
            let lastCord = (wHeight/2);
            let distance = (length*p5.sin(i+rotation));
            if(i<90){
                lastCord += distance;
            } else if(i<180){
                lastCord -= distance;
            } else if(i<270){
                lastCord += distance;
            } else {
                lastCord -= distance;
            }
            p5.line((wWidth/2),(wHeight/2),(wWidth/2)+((length*p5.cos(i+rotation))),lastCord);
        }
        p5.stroke(50);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
        p5.line(0,wHeight/2,wWidth,wHeight/2);

        rotation += 0.2;
    };

    return <FanSketch setup={setup} draw={draw} />;
}

class FanSketch extends Sketch {}