import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function unfinished2(){
    let moves = 0;
    const inc = 0.01;
    const steps = 6;
    const rotation = 360/6;
    let noiseOff = 0;
    const [wWidth,wHeight] = calulateDimentions(window);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
    };

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.strokeWeight(5);
        p5.stroke(255, 217, 2, 170);

        noiseOff = 0;
        p5.translate(wWidth/2, wHeight/2);
        p5.beginShape();
        for (let i = 0; i<steps; i++){
            p5.rotate(rotation);
            p5.line(0,0,0,wHeight);
            p5.vertex(p5.noise(noiseOff)*wWidth,(p5.noise(noiseOff+50)*10)-5);
            //p5.ellipse(p5.noise(noiseOff)*wWidth/2,(p5.noise(noiseOff+50)*10)-5,25-(i*2));
            //p5.text(i,p5.noise(noiseOff)*wWidth/2,(p5.noise(noiseOff+50)*10)-5);
            noiseOff += inc;
            //p5.vertex(p5.random(60, -60)*scale, p5.random(60, -60)*scale);
        }
        p5.endShape(p5.CLOSE);


        moves++;
        if(moves>wWidth*1.5){
            moves = -99;
        }
    };

    return <Unfinished2Sketch setup={setup} draw={draw} />;
}

class Unfinished2Sketch extends Sketch {}

