
let c;
let can;
let f=1;
function setup() {
  can=createCanvas(400, 250);
  can.parent("#canvas");
  
  select("#stop").mouseClicked(()=>{
    
    if(f){
      select("#stop").html("Start");
      f=0;
      noLoop();
    }else{
      select("#stop").html("Stop");
      f=1;
      loop();
    }
    
  });
}

let pi=1;
let den=1;
let n=1;
let history=[];
function mousePressed(){
  noLoop();
}

function draw() {
  background(200);
  
  for(let i=0;i<1;i++){
    den=(2*n+1)*Math.pow(-1,n);
    pi+=1/den;
    n++;
  }
    history.push(pi*4);
    let spacing =width/history.length;
    noFill();
    beginShape();
    stroke(0);
    for(let j=0;j<history.length;j++){
      let x=j*spacing;
      let y=map(history[j],2,4,0,height/2);
      vertex(x,y); 
    }
    endShape();
  fill(0);
  textAlign(CENTER);
  textSize(25);
  text(4*pi,width/2,height/1.3);
  text("PI:",width/2,height/1.6);
  frameRate(5);
  
  
}