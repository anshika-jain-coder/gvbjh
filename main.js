
img="";
status="";
objects=[];
find="";
r="";
g="";
b="";
objectDetector="";
message=""

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
   
}
function draw(){
    image(video,0,0,480,380);

    r= random(255);
  g=random(255);
  b=random(255);
 
        for(i=0; i< objects.length ; i++) {
           
           

           
            percent=floor(objects[i].confidence *100);
            fill(r,g,b);
            document.getElementById("status").innerHTML="Object Detected";
            text(objects[i].label + " " + percent + "%" ,objects[i].x + 15,objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            document.getElementById("number_of_objects").innerHTML=objects[i].label +" "+percent+"%" +" , ";
            console.log(objects[i].label +" "+percent+"%" +" , ");
        }

}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    find= document.getElementById("value").value;
}
function modelLoaded(){
    console.log("model loaded by anshika jain");
    status=true;
    objectDetector.detect(video,gotResult);
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    if(result){
        console.log(result);
        objects=result;
        for(i=0; i<objects.length; i++){
            document.getElementById("number_of_objects").innerHTM+=objects[i];
            if(objects==objects[i].label){
        speak();}
}}}
    function speak() {
        console.log(objects +" founded" );
        let message = objects +" founded" ;
        
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        
        window.speechSynthesis.speak(speech);
    }