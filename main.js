Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML="<img id='capture1' src="+data_uri+">";
    });
}
console.log("ml5 version: " + ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CvGaQl6pf/model.json" ,Modelloaded);
function Modelloaded(){
    console.log("Model Loaded");
}

function identify(){
    img=document.getElementById("capture1");
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}

