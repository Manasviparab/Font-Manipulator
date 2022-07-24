difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
   video=createCapture(VIDEO);
   video.size(550,500);

   canvas=createCanvas(450,450);
   canvas.position(560,150);

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function draw(){
    background("blue");
    document.getElementById("square_side").innerHTML = "Font of size is = " + difference + "px";
    textSize(difference);
    fill('#edda2f');
    text(Peter,50,400);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
}