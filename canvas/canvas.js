

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    //Sizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Shapes
    context.fillStyle ="red";
    context.lineWidth ="4";
    context.fillRect(50,110,50,50); //(sides(x), top(y), height, width)

    context.lineWidth ="3";
    context.strokeStyle ="green";
    context.strokeRect(120,110,50,50); //(sides, top, height, width)

    //Lines
    context.beginPath();// start line(x,y)
    context.moveTo(400, 100); // position line(x,y)
    context.lineTo(500, 100);// drawing line(x,y) top
    context.lineTo(500, 130);// drawing line(x,y) right
    context.lineTo(400, 130);// drawing line(x,y) left
    context.closePath();
    context.stroke();// define  line


    //variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);// to draw when clicked
    }

    function finishedPosition(){
        painting = false;
        context.beginPath();
    }

    function draw(e){
        if(!painting) return;
        context.lineWidth = 10;
        context.lineCap = "round";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();

        context.beginPath();
        context.lineTo(e.clientX, e.clientY);

    }

    //Event Listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

})

// function size(){
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }

// window.addEventListener('resize', size())