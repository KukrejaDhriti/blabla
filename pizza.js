function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img= "";
status = "";

function preload()
{
   img = loadImage("https://tse4.mm.bing.net/th?id=OIP.NzOK9l8QDQ10hYv7OEybiwHaE8&pid=Api&P=0&w=256&h=172");
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

}