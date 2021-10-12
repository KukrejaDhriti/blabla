function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img= "";
status = "";

function preload()
{
   img = loadImage("");
}

function modelLoaded()
{
    console.log("Model Loaded");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#dc143c");
    text("book", 45, 75);
    noFill();
    stroke("#dc143c");
    rect(30, 60, 450, 350);
    rect(30, 60, 450, 350);
    fill("#24bed8");
    text("Cat", 320, 75);
    noFill();
    stroke("#24bed8");
    rect(300, 60, 300, 350);
}