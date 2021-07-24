import React from 'react';
import Sketch from "react-p5";

export default function simple(){
    const wWidth = 400, wHeight = 400;
    let moves = 30;
    let stubs = [0,39,54,123,129,290,300,40];
    let colors = [];
    let cFrom, cTo;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        cFrom = p5.color(251,252,229,0.4*255);
        cTo = p5.color(126,100,24,0.4*255);

    };

    const draw = p5 => {
        p5.background(227,220,180);
        p5.stroke(215,200,160);
        p5.fill(215,200,160,180);
        p5.rect(0,(wHeight-40)/2,wWidth,(wHeight+40)/2);
        stubs.forEach(stub => {
            p5.rect((stub+moves*0.7)%wWidth,(wHeight-50)/2,4,8);
        });
        p5.translate(moves,165);
        p5.rotate(2*moves);
        //0,0 er senter for rotasjon og forflytting
        tumbleWeed(p5);

        moves=(moves+1)%wWidth;
    };

    const tumbleWeed = (p5) => {
        p5.randomSeed(119);
        //tegn tumbpleweedet her
        p5.stroke(215,200,160);
        p5.fill(250,240,230);
        for (let i = 0.1;i<=1;i+=0.1){
            weed(p5,i);
        }
    };

    const weed = (p5,scale) => {
        if(p5.random(0,1)!==0){
            let c = p5.lerpColor(cFrom,cTo,p5.random(0,1));
            p5.stroke(c);
        } else {
            p5.noStroke();
        }
        if(p5.random(0,1)!==0){
            let c = p5.lerpColor(cFrom,cTo,p5.random(0,1));
            p5.fill(c);
        } else {
            p5.noFill();
        }
        p5.quad(
            p5.random(-40, 0)*scale, p5.random(-40, 10)*scale,
            p5.random(-60, 10)*scale, p5.random(-40, 10)*scale,
            p5.random(-40, 50)*scale, p5.random(0,60)*scale,
            p5.random(-40, 50)*scale, p5.random(0,60)*scale
        )
    };

    return <Sketch setup={setup} draw={draw} />;
}



