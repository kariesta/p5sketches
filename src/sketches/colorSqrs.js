import React from 'react';
import Sketch from "react-p5";

export default function colorSqrs(){
    const wWidth = 400, wHeight = 400;
    let corners = [[0,0]];
    let widthSpace = 0;
    let heightSpace = 0;
    let numX = 13;
    let numY = 13;
    let blocked = [];



    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        //angleMode(DEGREES); // Change the mode to DEGREES
        //frameRate(1);

        //regn ut coordinater, width,height
        corners = findCorners(numX,numY,wWidth-10,wHeight-10);
        corners = corners.map (x => [x[0]+10,x[1]+10]);
        blocked = [false*corners.length];
        widthSpace = corners[1][0]-corners[0][0];
        heightSpace = corners[numX][1]-corners[0][1];
    };

    const draw = p5 => {
        p5.background(255);
        p5.noStroke();
        p5.fill(255);
        if (corners.length>= numX) {
            for(let x = 0; x<numX; x++){
                for(let y = 0; y<numY; y++){
                    //avgjør farge
                    if (blocked[(x*numX)+y]){
                        p5.fill(255);
                    } else {
                        p5.fill(x*255/numX,y*255/numY,p5.cos(((x*numX)+y)/corners.length)*255);
                    }

                    //tegn rute.
                    p5.rect(corners[(x*numX)+y][0],corners[(x*numX)+y][1],widthSpace-10,heightSpace-10);
                }
            }
        }
    };

    const mousePressed = (p5) => {
        //finner hvilken rute vi er i nå.
        if (p5.mouseX < wWidth && p5.mouseX > 0 && p5.mouseY < wHeight && p5.mouseY > 0){
            let i = 0;
            while (corners[i][1] < p5.mouseY && i<corners.length-1){
                i++;
            }
            if (i !== corners.length-1){
                i--;
            }
            while (corners[i][0] > p5.mouseX &&  i>0){
                i--;
            }
            //endre farge
            blocked[i] = !blocked[i];
        }
    };

    const findCorners = (antX, antY, maxX,maxY) => {
        let x = maxX/antX;
        let y = maxY/antY;
        let corns = [];
        for(let j = 0; j+y<=maxY;j+=y){
            for(let i = 0; i+x<=maxX;i+=x){
                corns.push([i,j]);
            }
        }
        return corns;
    };

    return <ColorSketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}

class ColorSketch extends Sketch {}