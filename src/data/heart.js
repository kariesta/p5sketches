import React from 'react';
import Sketch from "react-p5";

export default function simple(){
    const wWidth = 400, wHeight = 400;
    let points = [];
    let tris = [];
    let rotation = 5;
    let w = 200;
    let h = 100;
    let heartLeft;
    let heartRight;
    let triCount = 2;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        for (let x = 0; x<wWidth;x++){
            for(let y = 0; y<wHeight;y++){
                let m = Math.pow(x-(wWidth/2),2)/Math.pow(w/2,2);
                let n = Math.pow(y-(wHeight/2),2)/Math.pow(h/2,2);
                if(m+n === 1){
                    points.push([x,y]);
                }
            }
        }
        heartLeft = offset(rotatePoints(p5, points,45,0),14,0);
        heartLeft = heartLeft.slice(25,40).concat(heartLeft.slice(0,9));
        heartRight = offset(rotatePoints(p5, points,135,0),-14,0);
        heartRight = heartRight.slice(12,34);
    };

    const draw = p5 => {
        backing(p5);

        p5.strokeWeight(5);
        p5.stroke(200,100,100);
        heartLeft.forEach((p) => {
            p5.point(p[0],p[1]);
        });
        p5.stroke(250,100,100);
        heartRight.forEach((p) => {
            p5.point(p[0],p[1]);
        });
        p5.line(heartRight[0][0],heartRight[0][1],heartRight[heartRight.length-1][0],heartRight[heartRight.length-1][1]);

        //draw triangles
        p5.noStroke();
        if (tris.length>0){
            tris.forEach((poinatos) => {
                p5.fill(250,100,100);
                p5.triangle(poinatos[0][0],poinatos[0][1],poinatos[1][0],poinatos[1][1],poinatos[2][0],poinatos[2][1]);
            });
        }

        rotation = (rotation%360)+5;
    };

    const backing = (p5) => {
        p5.background(135, 206, 235);
        p5.noStroke();
        p5.fill(255);
        p5.stroke(10);
        p5.strokeWeight(10);
        p5.point(wWidth*2/4,wHeight/2);
        p5.strokeWeight(1);
        p5.line(wWidth/2,0,wWidth/2,wHeight);
        p5.line(0,wHeight/2,wWidth,wHeight/2);
        p5.stroke(150,50,50);
    };

    const rotatePoints = (p5,pointarray,rotated) => {
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
            //line(width/2,height/2,nyx,nyy);//points[k][0],points[k][1]);
            //stroke(255);
            rotatedPoints.push([xc-nyx,yc-nyy]);
            rotatedBottomPoints.push([xc+nyx,yc+nyy]);
        });

        return rotatedPoints.concat(rotatedBottomPoints);
    };

    const offset = (pointarray,xOff,yOff) => {
        return pointarray.map(x => [x[0]+xOff,x[1]+yOff]);
    };

    const mousePressed = () => {
        //add triangle
        if (triCount<heartRight.length-1){
            tris.push([heartRight[0],heartRight[heartRight.length-1],heartRight[triCount++]]);
            tris.push([heartLeft[0],heartLeft[heartLeft.length-1],heartLeft[triCount++]]);
        } else {
            triCount = 1;
            tris = [];
        }
    };

    return <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}



