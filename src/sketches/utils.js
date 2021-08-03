export const calulateDimentions = (window) => {
    const { innerWidth: w, innerHeight: h } = window;
    const ratio = 3/5;
    if(w >= h){
        return [h*ratio ,h*ratio];
    } else {
        return [w*ratio ,w*ratio];
    }
};

export const frame = (p5,bColor,fColor,padding,w,h) => {
    p5.noStroke();
    p5.fill(bColor);
    p5.rect(0,0,padding,h);
    p5.rect(0,0,w,padding);
    p5.rect(0,h-padding,w,padding);
    p5.rect(w-padding,0,padding,h);
    p5.stroke(fColor);
    p5.noFill();
    p5.rect(padding,padding,w-(padding*2),h-(padding*2));
};

export const pointInFrame = (width,height,padding,x,y) => {
  let xInFrame = x>padding && x<(width-padding);
  let yInFrame = y>padding && y<(height-padding);
  return xInFrame && yInFrame;
};

export const drawLine = (p5,pointArray) => {
    let prevP = pointArray[0];
    if (prevP[0] === undefined){
        pointArray.forEach(p => {
            p5.line(prevP.x,prevP.y,p.x,p.y);
            prevP = p;
        });
    } else {
        pointArray.forEach(p => {
            p5.line(prevP[0],prevP[1],p[0],p[1]);
            prevP = p;
        });
    }
};