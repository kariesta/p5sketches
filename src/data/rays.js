import React from 'react';
import Sketch from "react-p5";

/*function rays(){
    let lim;
    let innerheight;
    let innerwidth;
    //const { innerWidth: wWidth, innerHeight: wHeight } = window;
    let wWidth = 400, wHeight = 400;


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(innerwidth, wHeight).parent(canvasParentRef);

        // Sets the screen to be 720 pixels wide and 400 pixels high
        lim=0;
        //p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        innerheight = wHeight-10;
        innerwidth = wWidth-10;
    };

    const draw = p5 => {
        p5.background(25, 10, 20);
        p5.ellipse(100, 100, 100);
        // Set the background to black and turn off the fill color
        p5.background(0);
        p5.fill(255);
        p5.stroke(255);
        //p5.rect(0,0,innerwidth,innerheight/2);
        //p5.noFill();

        p5.noStroke();
        p5.fill(255);
        p5.arc(innerwidth/2,innerheight/2,100,100,0,180);
        p5.fill(0);
        p5.arc(innerwidth/2,innerheight/2,100,100,180,0);
    };

    return <Sketch setup={setup} draw={draw}/>;
}*/

function rays() {
    let maxLim = 200;

    let lim;
    let innerheight;
    let innerwidth;
    const wWidth = 400, wHeight = 400;
    //const { innerWidth: wWidth, innerHeight: wHeight } = window;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        // Sets the screen to be 720 pixels wide and 400 pixels high
        lim=0;
        p5.angleMode(p5.DEGREES); // Change the mode to DEGREES
        //frameRate(1);
        innerheight = wHeight-10;
        innerwidth = wWidth-10;
    };

    const draw = p5 => {
        p5.background(25, 10, 20);
        p5.ellipse(100, 100, 100);
        // Set the background to black and turn off the fill color
        p5.background(0);
        p5.fill(255);
        p5.stroke(255);
        p5.rect(0,0,wWidth,wHeight/2);
        p5.noFill();

        for(let i = 0; i<=lim; i++) {
            p5.stroke(0);
            let coor = evenEdgeCoor(p5,i / lim);
            p5.stroke(0);
            p5.line(innerwidth/2,innerheight/2,coor[0],coor[1]);
            p5.stroke(255);
            p5.line(innerwidth/2,innerheight/2,coor[0],innerheight-coor[1]);
        }
        if (lim<maxLim){
            lim++;
        }
        p5.noStroke();
        p5.fill(255);
        p5.arc(wWidth/2,wHeight/2,100,100,0,180);
        p5.fill(0);
        p5.arc(wWidth/2,wHeight/2,100,100,180,0);
    };

    const evenEdgeCoor = (p5,percent) => {
        let angle = percent*180;
        if (angle<45){
            return[(wWidth-innerwidth)/2,(innerheight/2)*(p5.tan(angle))]
        } else if (angle<90){
            return[(innerwidth/2)*(p5.tan(90-angle)),(wHeight-innerheight)/2];
        } else if (angle<(90+45)){
            return[(innerwidth/2)+((innerwidth/2)*(p5.tan(135-angle))),(wHeight-innerheight)/2];
            //x =0;
        } else{
            return[innerwidth+((wWidth-innerwidth)/2),((innerheight/2)*(p5.tan((180-angle))))];
        }
    };

    return <Sketch setup={setup} draw={draw} />;
}

export default rays;
