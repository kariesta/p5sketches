import React from 'react';
import Sketch from "react-p5";

export default function spirograph(){
    const wWidth = 400, wHeight = 400;
    let mouseWeight; //lineart
    let mouseWeightY; //background
    let toCenter;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        //p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
    };

    const draw = p5 => {
        mouseWeight = 0.06; //lineart
        mouseWeightY = -0.11; //background
        toCenter = (20+320+20)/2;

        p5.background(250,245,245);
        p5.noStroke();
        p5.fill(252,232,190);
        p5.ellipse(200+(mouseWeightY*(p5.mouseX-toCenter)),137+(mouseWeightY*(p5.mouseY-toCenter)),70,70);
        p5.noFill();
        p5.strokeWeight(20);
        p5.fill(50,42,0);
        let xOff = 0;
        let yOff = 0;
        p5.noFill();

        p5.stroke(0,250,270);
        wave(p5,0,250,270,xOff+30+(mouseWeightY*(p5.mouseX-toCenter)),yOff+(mouseWeightY*(p5.mouseY-toCenter)),40);
        p5.stroke(0,225,245);
        wave(p5,0,225,245,xOff+12+(mouseWeightY*(p5.mouseX-toCenter)),yOff+15+(mouseWeightY*(p5.mouseY-toCenter)),40);
        p5.stroke(0,240,260);
        wave(p5,0,240,260,xOff-6+(mouseWeightY*(p5.mouseX-toCenter)),yOff+30+(mouseWeightY*(p5.mouseY-toCenter)),40);

        //v lineart background v
        p5.stroke(250,245,245);
        lineart(p5,mouseWeightY,xOff,yOff);

        //v lineart v
        p5.stroke(0,0,0);
        lineart(p5,mouseWeight,xOff,yOff);

        //Final frame
        frame(p5);
    };

    const wave = (p5,r,g,b,xOff,yOff,wavesize) => {
        //stroke(0,250,270);
        //stroke(r,g,b);
        for (let i = 0; i < 11; i++) {
            p5.arc(xOff+(wavesize*i),yOff+(wavesize*i),wavesize,wavesize,p5.HALF_PI, p5.PI);//wave*3
            p5.arc(xOff+(wavesize*i),yOff+(wavesize*(i+1)),wavesize,wavesize,p5.HALF_PI+p5.PI,0);//wave*3
        }
    };

    const lineart = (p5,movement,xOff,yOff) => {
        p5.strokeWeight(4);
        p5.noFill();
        let mX = (movement*(p5.mouseX-toCenter));
        let mY = (movement*(p5.mouseY-toCenter));
        p5.arc(200+mX,137+mY,70,70, p5.PI+0.14,p5.HALF_PI-0.1);//wave*3
        wave(p5,250,245,245,xOff+38+mX,yOff-9+mY,40);
        wave(p5,250,245,245,xOff+21+mX,yOff+7+mY,40);
        wave(p5,250,245,245,xOff+4+mX,yOff+23+mY,40);
        wave(p5,250,245,245,xOff-13+mX,yOff+39+mY,40);
    };

    const frame = (p5) => {
        p5.noStroke();
        p5.fill(250,245,245);
        p5.rect(0,0,20,400);
        p5.rect(0,0,400,20);
        p5.rect(0,340,450,toCenter);
        p5.rect(340,0,100,450);
        p5.stroke(0,0,0);
        p5.noFill();
        p5.rect(20,20,320,320);
    };

    return <Sketch setup={setup} draw={draw} />;
}