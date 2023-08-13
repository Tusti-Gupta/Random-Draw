const drawings = ["alien", "flower", "snowman", "house", "cat"];
var drawMe = drawings[(Math.floor(Math.random() * drawings.length))];
var randomColor = Math.floor(Math.random()*16777215).toString(16);

function preload() {
}

function setup() {
    canvas = createCanvas();
    canvas.center();
}

function draw() {
    if (drawMe == "alien") {
    resizeCanvas(200, 200);
    canvas.center();
    rectMode(CENTER);
    stroke("#" + randomColor);
    rect(100,100,20,100);
    ellipse(100,70,60,60);
    ellipse(81,70,16,32);
    ellipse(119,70,16,32);
    line(90,150,80,160);
    line(110,150,120,160); 
    } 
    
    else if (drawMe == "flower") {
    resizeCanvas(300, 300);
    canvas.center();
    translate(150, 150);
    fill("#" + randomColor);
    noStroke();
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
        }
    } 

    else if (drawMe == "snowman") {
    resizeCanvas(400,400);
    canvas.center();
    background("#" + randomColor);
    fill(255);
    ellipse(160,260,120);  
    ellipse(160,220,80);  
    ellipse(160,180,40);
    fill(0);
    ellipse(150,180,10);  
    ellipse(170,180,10); 
    fill('orange');
    triangle(155,190,162,185,162,190);
    fill(0)
    rect(152,140,20,15);  
    rect(140,155,40,5);
    line(120,220,100,180);  
    line(200,220,220,180); 
    fill(0)
    quad(160,205,165,210,160,215,155,210);  
    quad(160,225,165,230,160,235,155,230);  
    quad(160,245,165,250,160,255,155,250);
    } else if (drawMe == "house") {
        resizeCanvas(600, 500);
        canvas.center();
           background("aqua");
           strokeWeight(0);
           noFill();
           fill("brown");
           rect(37, 375, 20, 120);
           rect(545, 375, 20, 120);   
           noFill();
           fill("green");  
           circle(20, 350,50);
           circle(51, 330,50);
           circle(69, 350,50);
           circle(59, 376,50);
           circle(35, 374,50);
           circle(580, 350,50);
           circle(551, 330,50);
           circle(526, 350,50);
           circle(540, 376,50);
           circle(570, 374,50);
           strokeWeight(3);
           noFill();
           fill("yellow");
           circle(60, 60, 90);
           noFill();
           fill("#" + randomColor);
           rect(100, 300, 350, 200);
           noFill();
           fill("magenta")
           rect(230, 360, 70, 140);
           noFill();
           fill("pink");
           rect(130, 378, 70, 60);
           rect(338, 378, 70, 60);
           noFill();
           fill("green");
           rect(0, 490, 600, 50);
           noFill();
           fill("brown");
           triangle(100, 300, 260, 100, 450, 300);
           rect(220, 150, 88, 1);
           rect(180, 200, 175, 1);
           rect(140, 250, 263, 1);
           noFill();
           fill("grey");
           rect(480, 450, 50, 40, 5);
           rotate(PI / 4.0);
           rect(262, -50, 212, 1);
           rect(270, 14, 140, 1);
           rect(277, 78, 68, 1);
    }

    else if(drawMe == "cat") {
        resizeCanvas(400, 400);
        canvas.center();
        background(220);
        strokeWeight(4);
        line(250, 200, 370, 200);
        line(250, 195, 370, 177);
        line(250, 205, 370, 223);
        line(150, 200, 30, 200);
        line(150, 195, 30, 177);
        line(150, 205, 30, 223);
        circle(200, 200, 20);
        fill("#" + randomColor);
    } 
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("colorNameInput").value;
}