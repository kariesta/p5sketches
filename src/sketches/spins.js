import React from 'react';
import Sketch from "react-p5";

export default function splat(){
    const wWidth = 400, wHeight = 400;
    const transparency = 200;
    let points = [];
    let rotation = 5;
    let w = 200;
    let h = 100;


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        for (let x = 0; x<wWidth;x++){
            for(let y = 0; y<wHeight;y++){
                let m = Math.pow(x-(wWidth/2),2)/Math.pow(w/2,2);
                let n = Math.pow(y-(wHeight/2),2)/Math.pow(h/2,2);
                if(m+n===1){
                    //points.push([(width/2)+((x-(width/2))*cos(rotation)),(height/2)+((y-(height/2))*sin(rotation))]);
                    points.push([x,y]);
                }
            }
        }
    };

    const draw = p5 => {
        backing(p5);
        p5.strokeWeight(5);
        p5.stroke(200,100,100,transparency);
        let spin = rotatePoints(p5,points,rotation);
        spin.forEach((p) => {
            p5.point(p[0],p[1]);
        });
        p5.stroke(250,100,100,transparency);
        let spinoff = rotatePoints(p5,points,-rotation);

        spinoff.forEach((p) => {
            p5.point(p[0],p[1]);
        });

        rotation = (rotation%360)+1;
    };

    const backing = (p5) => {
        p5.background(135, 206, 235);
        p5.noStroke();
        p5.fill(255);
        p5.stroke(240,110,110,transparency);
        p5.strokeWeight(10);
        p5.point(wWidth*2/4,wHeight/2);  //point(width*3/4,height/4);
        p5.strokeWeight(1);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
        p5.line(0,wHeight/2,wWidth,wHeight/2);
        p5.stroke(150,50,50,transparency);
    };

    const rotatePoints = (p5, pointarray,rotated) => {
        let rotatedPoints = [];
        let rotatedBottomPoints = [];
        pointarray.forEach((p) => {
            //roter punktene
            let dist = Math.sqrt(Math.pow(wWidth/2-p[0],2)+Math.pow(wHeight/2-p[1],2));
            let angle = p5.asin((wWidth/2-p[0])/dist);
            let nyx = (dist*p5.cos(rotated+angle));
            let nyy = (dist*p5.sin(rotated+angle));
            let xc = wWidth/2;
            let yc = wHeight/2;
            rotatedPoints.push([xc-nyx,yc-nyy]);
            rotatedBottomPoints.push([xc+nyx,yc+nyy]);
        });

        return rotatedPoints.concat(rotatedBottomPoints);
    };

    return <Sketch setup={setup} draw={draw} />;
}