function preload(){
    clown_nose = loadImage("https://i.postimg.cc/3rChtPG6/clownnose.png");
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position((screen.width - (640 + 320)), 300);
    video = createCapture(VIDEO);
    video.hide();
    my_poses = ml5.poseNet(video, modelLoaded);
    my_poses.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialized.");
}
function draw(){
    background("white");
    image(video, 0, 0, 640, 480);
    image(clown_nose, (nose_x - 22.5), (nose_y - 22.5), 45, 45);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("x = " + nose_x + ", y = ", nose_y);
    }
}