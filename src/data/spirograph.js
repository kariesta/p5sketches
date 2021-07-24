import React from 'react';
import Sketch from "react-p5";

export default function spirograph(){
    const wWidth = 400, wHeight = 400;
    let degree = 0;
    let points = [];
    const bigRad = 150;
    const tinyRad = 35;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //p5.frameRate(1);
        //regn ut coordinater, width,height
    };

    //Ta noen kule farger da vell
    // tegn ringer
    // liten ring beveger seg inni stor ring, omkretsen av liten ring og stor ring skal forholde seg likt.
    const draw = p5 => {
        p5.background(135, 206, 235);
        degree=(degree+1)%360;

        p5.fill(250);
        p5.noStroke();
        let tinyXY= orbitPos(p5, (bigRad-tinyRad)/2, degree);
        p5.ellipse(wWidth/2+tinyXY[0],(wHeight/2)+tinyXY[1],tinyRad,tinyRad);
        p5.noFill();
        p5.stroke(0);
        p5.strokeWeight(1);
        p5.ellipse(wWidth/2,(wHeight/2),bigRad,bigRad);


        //loop through list of dots.
        let dotXY=orbitPos(p5,tinyRad/2,360-degree);
        points.push([wWidth/2+tinyXY[0]+dotXY[0],(wHeight/2)+tinyXY[1]+dotXY[1]]);

        for (let i = 0; i<points.length; i++){
            p5.point(points[i][0],points[i][1]);
        }

        //regner ut ny posisjon for dot.
        //tegner en liste av tidligere og den nye dotten
    };

    //degree range from 0 to 359.
    const orbitPos = (p5,radius, degree) => {
        return [radius*p5.sin(degree),radius*p5.cos(degree)];
    };

    return <Sketch setup={setup} draw={draw} />;
}