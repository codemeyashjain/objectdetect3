var cocossd = "";
var img1 = "";
 objects=[];
status1="";
function preload(){
img1 = loadImage("image1.jpg");
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("h3").innerHTML = "status : detecting objects";
}
function modelLoaded(){
    console.log("cocossd intitialized");
    status = true;
    objectDetector.detect(img1,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
   objects=results;
}
function draw()
{
    image(img1,0,0,400,400);
if(status != "")
{
    for(i=0; i<objects.length; i++)
    {
fill("red");
conf=floor(objects[i].confidence *100);
text(objects[i].label + " "+conf +"%",objects[i].x,objects[i].y);
noFill();
stroke("red");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);   
    }
}
}