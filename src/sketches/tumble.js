import React from 'react';
import Sketch from "react-p5";

//TODO noise for smoothe kanter
export default function tumble(){
    const wWidth = 400, wHeight = 400;
    let moves = 30;
    let stubs = [0,39,54,123,129,290,300,40];
    let cFrom, cTo;
    let randomStart=119;

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

        moves=(moves+1)%(wWidth+30);
    };

    const tumbleWeed = (p5) => {
        if(moves===0){
            randomStart++;
        }
        p5.randomSeed(randomStart);
        //tegn tumbpleweedet her
        p5.stroke(215,200,160);
        p5.fill(250,240,230);
        for (let i = 0.1;i<=1;i+=0.1){
            weed(p5,i);
        }
    };

    const weed = (p5,scale) => {
        if(p5.random(0,1)>0.5){
            let c = p5.lerpColor(cFrom,cTo,p5.random(0,1));
            p5.stroke(c);
            p5.noFill();
        } else {
            let c = p5.lerpColor(cFrom,cTo,p5.random(0,1));
            p5.noStroke();
            p5.fill(c);
        }

        p5.beginShape();
        p5.vertex(p5.random(-40, 0)*scale, p5.random(-40, 0)*scale,);
        p5.vertex(p5.random(-40, 5)*scale, p5.random(40,60)*scale);
        p5.vertex(p5.random(50, 10)*scale, p5.random(40,60)*scale);
        p5.vertex(p5.random(60, 10)*scale, p5.random(-40, 0)*scale);
        p5.vertex(p5.random(50, 40)*scale, p5.random(-40, 0)*scale);
        p5.vertex(p5.random(60, 10)*scale, p5.random(-20, 0)*scale);
        p5.vertex(p5.random(60, 10)*scale, p5.random(-5, 0)*scale);
        p5.endShape(p5.CLOSE);
    };

    return <TumbleSketch setup={setup} draw={draw} />;
}

class TumbleSketch extends Sketch {}