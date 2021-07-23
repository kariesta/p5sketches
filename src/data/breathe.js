import React from 'react';
import Sketch from "react-p5";

export default function breathe(){
    const wWidth = 400, wHeight = 400;
    let rotation = 5;
    let rotneg = false;
    let offset=100-45;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
    };

    const draw = p5 => {
        backing(p5);

        p5.stroke(50);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
        p5.line(0,wHeight/2,wWidth,wHeight/2);

        p5.stroke(150,50,50);
        p5.line(wWidth/2,wHeight/2,(wWidth/2)+(50*p5.sin(rotation)),(wHeight/2)+(50*p5.cos(rotation)));
        p5.line(wWidth/2,wHeight/2,(wWidth/2)+(100*p5.cos(rotation)),(wHeight/2)+(100*p5.sin(rotation)));
        p5.stroke(50);

        for (let j = 0;j<20;j++){
            p5.line((wWidth/2)-offset+(j*10),wHeight/2,(wWidth/2)-100+(j*10),(wHeight/2)-(50*p5.sin((180/20)*j)));
            p5.line((wWidth/2)-offset+(j*10),wHeight/2,(wWidth/2)-100+(j*10),(wHeight/2)+(50*p5.sin((180/20)*j)));
        }
        //100 |, mer <, mindre >
        if (rotneg){
            offset -= 2*(rotation%90/90);
        } else {
            offset += 2*(rotation%90/90);
        }

        if (rotation%90 === 0){
            rotneg = !rotneg;
        }
        rotation = (rotation%360)+1;
    };

    const backing = (p5) => {
        p5.background(135, 206, 235);
    };

    return <Sketch setup={setup} draw={draw} />;
}
