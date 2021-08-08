import React from 'react';
import Sketch from "react-p5";
import {calulateDimentions} from "./utils";

export default function wavey(){
    //let moves = 0;
    const [wWidth,wHeight] = calulateDimentions(window);
    const xSteps = 12;
    const stripeL = 6;
    const stripeW = 7;
    //const framePadding = 130;
    const modes = ['checkerd', 'simple romb', 's-rombs', 'pleats', 'bezier pleats', 's-checks','s-bezier', 'bezier'];
    //const ellWit = 8;
    let patternMode = 7;
    let squareSide = wWidth/7;
    //let squareUtils = [];

    /*const getSquareVectors = (p5) => {
        let upperLeft = p5.createVector((wWidth-squareSide)/2,(wHeight-squareSide)/2);
        let upperRight = p5.createVector((wWidth+squareSide)/2,(wHeight-squareSide)/2);
        let lowerLeft = p5.createVector((wWidth-squareSide)/2,(wHeight+squareSide)/2);
        let lowerRight = p5.createVector((wWidth+squareSide)/2,(wHeight+squareSide)/2);
        return [upperLeft,upperRight,lowerLeft,lowerRight,squareSide,squareSide];
    };*/

    const colorTheme = (p5,primary,secondary,number) => {
        switch (number) {
            case 0:
                secondary(255,255,255,255);
                primary(255, 217, 2,50);
                break;
            case 1:
                secondary(255,255,255,255);
                primary(255, 207, 100,255);
                break;
            case 2:
                secondary(255,255,255,255);
                primary(255, 217, 2,150);
                break;
            case 3:
                secondary(255,255,255,255);
                primary(255, 207, 100,255);
                break;
            case 0.5:
                secondary(255,255,255,255);
                primary(255,255,255,255);
                break;
            case 1.5:
                secondary(255,255,255,255);
                primary(255, 207, 100,150);
                break;
            case 2.5:
                secondary(255,255,255,255);
                primary(255, 217, 2,50);
                break;
            case 3.5:
                secondary(255,255,255,255);
                primary(255, 207, 100,100);
                break;
            default:
                secondary(255,255,255,255);
                primary(255, 217, 2,100);
        }
    };

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(wWidth, wHeight).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        //squareUtils = getSquareVectors(p5);
    };

    //TODO click and drag checks
    //TODO click and drag rombe
    //TODO click and drag bezier

    const draw = p5 => {
        p5.background(255, 130, 20);
        p5.stroke(255, 217, 2, 50);
        p5.fill(255, 217, 2);//, 50);
        //p5.noFill();

        switch (modes[patternMode]) {
            case 'checkerd':
                check(p5);
                //forgeCheck(p5);
                break;
            case 'simple romb':
                romb(p5,simpleRomb);
                break;
            case 's-rombs':
                romb(p5,sFigure);
                break;
            case 'pleats':
                rombPattern(p5,rombulus);
                break;
            case 'bezier pleats':
                //rombPattern(p5,rombulus);
                rombPattern(p5,bezierus);
                break;
            case 's-checks':
                p5.stroke(50);
                p5.fill(255, 217, 2, 150);
                sChecks(p5);
                p5.push();
                p5.scale(1,-1);
                p5.translate(squareSide,-wHeight+squareSide*0.5);
                p5.fill(255, 207, 100);
                sChecks(p5);
                p5.pop();
                break;
            case 's-bezier':
                p5.stroke(50);
                p5.fill(255, 217, 2, 150);
                sBezier(p5,0,0);
                p5.push();
                p5.scale(1,-1);
                p5.translate(squareSide,-wHeight+squareSide*0.5);
                p5.fill(255, 207, 100,150);
                sBezier(p5,0,0);
                p5.pop();
                break;
            case 'bezier':
                /*p5.stroke(50);
                p5.fill(255, 217, 2, 150);
                sBezier(p5,(p5.mouseX-wWidth)/2,(p5.mouseY-wHeight)/2);
                p5.push();
                p5.scale(1,-1);
                p5.translate(squareSide,-wHeight+squareSide*0.5);
                p5.fill(255, 207, 100,150);
                sBezier(p5,0,0);
                p5.pop();*/
                bez(p5);
                break;
            default:
                console.log('d');
                break;
        }
        /*
        p5.ellipse(squareUtils[0].x+squareUtils[1], squareUtils[0].y, ellWit);
        p5.ellipse(squareUtils[0].x, squareUtils[0].y+squareUtils[2], ellWit);
        p5.ellipse(squareUtils[0].x+squareUtils[1], squareUtils[0].y+squareUtils[2], ellWit);
        */
    };

    const check = (p5) => {
        for(let j = 0; j*squareSide<wHeight;j++){
            for(let i = 0; i*squareSide*2<wWidth;i++){
                p5.rect(i*squareSide*2+((j%2)*squareSide),j*squareSide,squareSide,squareSide);
            }
        }
        //p5.filter(p5.BLUR,10);
    };

    /*const forgeCheck = (p5) => {
        p5.fill(255, 130, 20,200);
        p5.stroke(0);
        p5.square(framePadding,framePadding,wWidth-(framePadding*2));
        p5.noStroke();
        p5.fill(255, 207, 100);
        p5.rect(squareUtils[0].x,squareUtils[0].y,squareUtils[4],squareUtils[5]);
        p5.fill(255,200);
        p5.ellipse(squareUtils[0].x, squareUtils[0].y, ellWit);
        p5.ellipse(squareUtils[1].x, squareUtils[1].y, ellWit);
        p5.ellipse(squareUtils[2].x, squareUtils[2].y, ellWit);
        p5.ellipse(squareUtils[3].x, squareUtils[3].y, ellWit);
    };*/

    const romb = (p5,rombType) => {
        let height = p5.sin(60)*squareSide;
        let xOff = -p5.cos(60)*squareSide;
        for(let j = 0; j*height<wHeight;j++){
            for(let i = 0; (i*squareSide*2)<(wWidth+(-3*xOff));i++){
                let x = i*squareSide*2+((j%4)*xOff);
                let y = j*height;
                rombType(p5,x,y,height);
            }
        }
    };

    const simpleRomb = (p5,x,y,height) => {
        p5.fill(255, 207, 100);
        p5.stroke(0);
        p5.quad(x,y,
            x+squareSide,y,
            x+squareSide*1.5,y+height,
            x+squareSide*0.5,y+height);
    };

    const sFigure = (p5,x,y,height) => {
        p5.fill(255, 217, 2);
        p5.noStroke();
        let firstAngle = 30+45;
        let firstX = (squareSide/4)*p5.sin(firstAngle);
        let firstY = (squareSide/2)*p5.cos(firstAngle);
        p5.beginShape();
        p5.vertex(x,y);
        p5.vertex(x+squareSide, y);
        p5.vertex(x+squareSide+firstX, y+firstY);
        p5.vertex(x+squareSide+firstX, y+height-firstY);
        p5.vertex(x+squareSide*1.5, y+height);
        p5.vertex(x+squareSide*0.5, y+height);

        p5.vertex(x+squareSide*0.5-firstX, y+height-firstY);
        p5.vertex(x+squareSide*0.5-firstX, y+firstY);
        p5.endShape(p5.CLOSE);
    };

    const rombPattern = (p5,pattern) => {
        let xJump = (squareSide*0.53)+(squareSide/2*p5.sin(60));//(squareSide/2*p5.cos(60))+(squareSide/2);
        for(let xs = -4*xJump; xs-xJump<wWidth; xs+= xJump){
            //let mx = ((xs/xJump));//%2); // +((xs%(2*xJump))/xJump*squareSide/4)
            let ystart = -0.5*((xs/xJump)%2); // +(xs%(2*xJump))/xJump*squareSide/2
            for(let ys = ystart; ((ys-1)*squareSide)<wHeight; ys++){
                pattern(p5,xs,ys);
            }
        }
    };

    const rombulus = (p5,xs,ys) => {
        //horisontal
        let x = xs+(ys/2)*squareSide;
        let y = ys*squareSide;
        colorTheme(p5,(r,g,b,a) => p5.fill(r,g,b,a),(r,g,b,a) => p5.stroke(r,g,b,a),(ys)%4);
        para(p5,x,y);
        colorTheme(p5, (r,g,b,a) => p5.fill(r,g,b,a),(r,g,b,a) => p5.stroke(r,g,b,a),(ys+1)%4);
        //angled
        angledRomb(p5,x+(squareSide*0.25),y-(squareSide/2));
    };

    const para = (p5,x,y) => {
        p5.quad(x,y,
            x+squareSide/2,y,
            x+squareSide,y+squareSide,
            x+squareSide/2,y+squareSide);
    };

    const angledRomb = (p5,x,y) => {
        let xoff = squareSide/2*p5.cos(60);
        let yoff = squareSide/2*p5.sin(60);
        p5.quad(x,y,
            x+xoff,y-yoff,
            x+xoff+(squareSide/2),y+squareSide-yoff,
            x+squareSide/2,y+squareSide);
    };

    const bezierus = (p5,xs,ys) => {
        let x = xs+(ys/2)*squareSide;
        let y = ys*squareSide;
        p5.noFill();
        colorTheme(p5,(r,g,b,a) => p5.stroke(r,g,b,a),() => {},(ys)%4);
        bezius(p5, x,y);
        colorTheme(p5,(r,g,b,a) => p5.stroke(r,g,b,a),() => {},(ys+1)%4);
        angledBezius(p5, x+(squareSide * 0.25), y-(squareSide / 2));
    };

    const bezius = (p5,x,y) => {
        let steps = (squareSide/2)/6;
        for (let i = 0; i< 6; i++) {
            x += steps;
            //p5.stroke(50);
            //p5.noFill();
            p5.bezier(x,y,
                x+squareSide,y,
                x-squareSide/2,y+squareSide,
                x+squareSide/2,y+squareSide);
        }
    };

    const angledBezius = (p5,x,y) => {
        //romby(p5,x,y);

        let xoff = squareSide/2*p5.cos(60);
        let yoff = squareSide/2*p5.sin(60);
        let stepsX = ((squareSide/2)/6)*p5.cos(60);
        let stepsY = ((squareSide/2)/6)*p5.sin(60);
        //x += stepsX*0.5;
        //y -= stepsY*0.5;
        for (let i = 0; i< 6; i++) {
            x += stepsX;
            y -= stepsY;
            let start = [x,y];
            let startWeight = [x-xoff*2,y+yoff*2];
            let end = [x+squareSide/2,y+squareSide];
            let endWeight = [x+(xoff*2)+(squareSide/2),y+squareSide-(yoff*2)];

            //p5.stroke(255);
            /*p5.line(x,y,
                x-xoff*2,y+yoff*2);
            p5.stroke(50);
            p5.line(x+squareSide/2,y+squareSide,
                x+(xoff*2)+(squareSide/2),y+squareSide-(yoff*2));*/
            //p5.noFill();
            p5.bezier(start[0],start[1],
                startWeight[0],startWeight[1],
                endWeight[0],endWeight[1],
                end[0],end[1]);
        }
    };

    const sChecks = (p5) => {
        for(let j = -2; j*squareSide<wHeight;j++){
            for(let i = -2; i*squareSide*2<wWidth;i++){
                sCheckFigure(p5,i*squareSide*2,j*squareSide);
            }
        }
    };

    const sCheckFigure = (p5,x,y) => {
        //p5.noStroke();
        //p5.fill(255, 217, 2); //let angle = 45;
        let firstX = (squareSide/4);//p5.sin(angle);
        let firstY = (squareSide/4);//p5.cos(angle);
        p5.beginShape();
        p5.vertex(x,y);
        p5.vertex(x+squareSide, y);
        p5.vertex(x+squareSide+firstX, y+firstY);
        p5.vertex(x+squareSide-firstX, y+squareSide-firstY);
        p5.vertex(x+squareSide, y+squareSide);
        p5.vertex(x, y+squareSide);
        p5.vertex(x-firstX, y+squareSide-firstY);
        p5.vertex(x+firstX, y+firstY);
        p5.endShape(p5.CLOSE);
    };

    const sBezier = (p5,x,y) => {
        for(let j = y-2; j*squareSide<wHeight;j++){
            for(let i = x-2; i*squareSide*2<wWidth;i++){
                sBezFigure(p5,i*squareSide*2,j*squareSide);
            }
        }
    };

    const sBezFigure = (p5,x,y) => {
        let firstX = (squareSide/2);
        let firstY = (squareSide/2);
        //p5.ellipse(x+squareSide+firstX, y+firstY,5);
        //p5.ellipse(x+squareSide,y+squareSide,5);
        p5.beginShape(x-firstX, y+squareSide-firstY);
        p5.vertex(x+squareSide, y);
        p5.bezierVertex(x+squareSide+firstX, y+firstY, x+squareSide-firstX, y+squareSide-firstY, x+squareSide,y+squareSide);

        p5.vertex(x+squareSide, y+squareSide);
        p5.vertex(x, y+squareSide);
        p5.bezierVertex(x-firstX, y+squareSide-firstY,x+firstX, y+firstY,x,y);
        p5.vertex(x,y);
        p5.endShape(p5.CLOSE);

        oneSWave(p5,x,y);
    };

    const oneSWave = (p5,x,y) => {
        let offsetty = squareSide/7;
        for (let i = offsetty; i<squareSide; i+=offsetty){
            oneStrip(p5,x+i,y,x+i,y+squareSide);
        }
        /*let offsetty = squareSide/7;
        for (let i = offsetty*1; i<squareSide; i+=offsetty){
            oneStrip(p5,x+i,y,x+i,y+squareSide);
        }*/
    };

    const oneStrip = (p5,x1,y1,x2,y2) => {
        let outerCurve = -((squareSide/2)*1.05);//*0.8);
        let innerCurve = -((squareSide/2)*0.95);//*0.8);


        p5.beginShape();
        p5.vertex(x2, y1);
        p5.bezierVertex(x2-innerCurve, y1-innerCurve, x1+outerCurve, y2+outerCurve, x1, y2);
        p5.bezierVertex(x1+innerCurve, y2+innerCurve, x2-outerCurve, y1-outerCurve, x2, y1);

        p5.endShape();
        /*
        let outerCurve = -((squareSide/2)*1.05);//*0.8);
        let innerCurve = -((squareSide/2)*0.95);//*0.8);
        //p5.stroke(255);
        //p5.line(x2, y1-2,x2-(wit*1.1), y1-2);
        //p5.line(x1+(wit*1), y2-2,x1, y2-2);
        //p5.stroke(0, 0, 0);

        //p5.stroke(255/2);
        //p5.line(x1, y2+2,x1+(wit*1.1), y2+2);
        //p5.line(x2-(wit*1), y1+2, x2, y1+2);

        p5.beginShape();
        p5.vertex(x2, y1);
        p5.bezierVertex(x2-innerCurve, y1-innerCurve, x1+outerCurve, y2+outerCurve, x1, y2);
        p5.bezierVertex(x1+innerCurve, y2+innerCurve, x2-outerCurve, y1-outerCurve, x2, y1);

        p5.endShape();*/
    };





    const bez = (p5) => {
        stripes(p5,-xSteps*30+p5.mouseX,0+p5.mouseY);
        p5.fill(255, 207, 100);//, 50);
        p5.push();
        p5.scale(1,-1);
        p5.translate(xSteps*30,-xSteps*stripeL*6);
        p5.rotate(90);
        stripes(p5,-xSteps*30,0);
        p5.pop();
    };

    const mousePressed = () => {
        patternMode = (patternMode+1)%modes.length;

        //if outside frame: change mode, else: move square.
        /*if(pointInFrame(wWidth,wHeight,framePadding,p5.mouseX,p5.mouseY)){
            editSquare(p5);
        } else {
            patternMode = (patternMode+1)%modes.length;
        }*/
    };

    /*const editSquare = (p5) => {
        //if inside a point, move that point ans square.
        let mouse = p5.createVector(p5.mouseX,p5.mouseY);
        p5.dist(mouse,squareUtils[0]);
        console.log("yoo");
        if (p5.dist(mouse,squareUtils[0])<ellWit){
            squareUtils[0] = mouse;
            console.log("yoo");
        }
    };

    const mouseReleased = (p5) => {
        //TODO sjekk etter hvilken prikk som skal "slippes" og slipp den.
        p5.ellipse(20,20,20);
    };
    */

    const stripes = (p5,x,y) => {
        for(let j = 0; j<stripeW;j++){
            //let endPoint = {x:x+(xSteps*12)*j,y:y};
            for (let i = 0; i<stripeL;i++) {
                p5.noFill();
                p5.stroke(255,207,100);
                //endPoint = oneWave(p5,endPoint.x-(xSteps*6),endPoint.y);
                //p5.ellipse(endPoint.x-(xSteps*6),endPoint.y,5);
                colorTheme(p5,(r,g,b,a) => p5.stroke(r,g,b,a),() => {},(i+j)%4);
                bezius(p5,x+(squareSide*j),y+squareSide*i)
            }
        }
    };

    /*const oneWave = (p5,x,y) => {
        let offsetty = squareSide/7;
        for(let i = 0; i<6;i++){
            oneStreak(p5,x+(i*offsetty),y,x+(offsetty*(6+i)),y+offsetty*6);
            //oneWave(p5,13+(i*8),10,83+(i*8),80);
        }
        return {x:x+(offsetty*(5+5)),y:y+offsetty*6}
        /*for(let i = 0; i<6;i++){
            oneStreak(p5,x+(i*xSteps),y,x+(xSteps*(6+i)),y+xSteps*6);
            //oneWave(p5,13+(i*8),10,83+(i*8),80);
        }
        return {x:x+(xSteps*(5+5)),y:y+xSteps*6}*
    };*/

    /*const oneStreak = (p5,x1,y1,x2,y2) => {
        let wit = x2-x1;
        let outerCurve = (wit*1.07);//*0.8);
        let innerCurve = (wit*0.92);//*0.8);

        p5.beginShape();
        p5.vertex(x2, y1);
        p5.bezierVertex(x2-outerCurve, y1, x1+innerCurve, y2, x1, y2);
        p5.bezierVertex(x1+outerCurve, y2, x2-innerCurve, y1, x2, y1);
        p5.endShape();
        /*let wit = x2-x1;
        let outerCurve = (wit*1.07);//*0.8);
        let innerCurve = (wit*0.92);//*0.8);
        //p5.stroke(255);
        //p5.line(x2, y1-2,x2-(wit*1.1), y1-2);
        //p5.line(x1+(wit*1), y2-2,x1, y2-2);
        //p5.stroke(0, 0, 0);

        //p5.stroke(255/2);
        //p5.line(x1, y2+2,x1+(wit*1.1), y2+2);
        //p5.line(x2-(wit*1), y1+2, x2, y1+2);

        p5.beginShape();
        p5.vertex(x2, y1);
        p5.bezierVertex(x2-outerCurve, y1, x1+innerCurve, y2, x1, y2);
        p5.bezierVertex(x1+outerCurve, y2, x2-innerCurve, y1, x2, y1);
        p5.endShape();*
    };*/

    /*const rotatesRomby = (p5,x,y) => {
        p5.stroke(255);
        p5.fill(255, 217, 2,50);
        let xoff = squareSide/2*p5.cos(60);
        let yoff = squareSide/2*p5.sin(60);
        p5.quad(x,y,
            x+xoff,y-yoff,
            x+xoff+(squareSide/2),y+squareSide-yoff,
            x+squareSide/2,y+squareSide);


        //romby(p5,x,y);
        let stepsX = ((squareSide/2)/6)*p5.cos(60);
        let stepsY = ((squareSide/2)/6)*p5.sin(60);
        //x += stepsX*0.5;
        //y -= stepsY*0.5;
        for (let i = 0; i< 6; i++) {
            x += stepsX;
            y -= stepsY;
            let start = [x,y];
            let startWeight = [x-xoff*2,y+yoff*2];
            let end = [x+squareSide/2,y+squareSide];
            let endWeight = [x+(xoff*2)+(squareSide/2),y+squareSide-(yoff*2)];

            p5.stroke(255);
        }
    };*/

    /*const romby = (p5,x,y) => {
        p5.stroke(255);
        p5.fill(255, 207, 100);
        p5.quad(x,y,
            x+squareSide/2,y,
            x+squareSide,y+squareSide,
            x+squareSide/2,y+squareSide);

        let steps = (squareSide/2)/6;
        for (let i = 0; i< 6; i++) {
            x += steps;
            p5.stroke(255);
            p5.line(x,y,
                x+squareSide,y,);
            p5.stroke(50);
            p5.line(x-squareSide/2,y+squareSide,
                x+squareSide/2,y+squareSide);
            //p5.fill(255, 217, 2, 150);
            p5.noFill();
            p5.bezier(x,y,
                x+squareSide,y,
                x-squareSide/2,y+squareSide,
                x+squareSide/2,y+squareSide);
        }
    };*/

    /*const rombyPattern = (p5) => {
        for(let ys = 0; ys<wHeight; ys++){
            romby(p5,(ys/2)*squareSide,ys*squareSide);
        }
    };*/

    //return <WaveySketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased}/>;
    return <WaveySketch setup={setup} draw={draw} mousePressed={mousePressed}/>;
}

class WaveySketch extends Sketch {}

