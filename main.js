Pred1 = "";
Pred2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

Webcam.attach('#webcam');

function takePic(){
    Webcam.snap(function(pic){
        document.getElementById("output").innerHTML = '<img id="imag" src="' + pic + '">';
    });
}

console.log("ml5 version is - ", ml5.version);

model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FmH-_01en/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded successfully");
}


function CheckPic(){
   img = document.getElementById("imag");
   model.classify(img, getResult);
}

function getResult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        Pred1= result[0].label;
        Pred2= result[1].label;
        document.getElementById("emotionNam1").innerHTML = Pred1;
        document.getElementById("emotionNam2").innerHTML = Pred2;
        
        if (Pred1 == "1"){
            document.getElementById("emoji1").innerHTML = "&#128400";
        }

        else if (Pred1 == "2"){
            document.getElementById("emoji1").innerHTML = "&#128077";
        }

        else if (Pred1 == "3") {
            document.getElementById("emoji1").innerHTML = "&#128076";
        }
        
        else if (Pred1 == "4") {
            document.getElementById("emoji1").innerHTML = "&#128078";
        }
        

        if (Pred2 == "1"){
            document.getElementById("emoji2").innerHTML = "&#128400";
        }

        else if (Pred2 == "2"){
            document.getElementById("emoji2").innerHTML = "&#128077";
        }

        else if (Pred2 == "3") {
            document.getElementById("emoji2").innerHTML = "&#128076";
        }

        else if (Pred2 == "4") {
            document.getElementById("emoji2").innerHTML = "&#128078";
        }
    }
}