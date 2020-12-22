var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["picture1.jpg","picture2.jpg","picture3.jpg","picture4.jpg"];
randomnumber= Math.floor(Math.random()*4);
console.log(randomnumber)

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = nasa_mars_images_array[randomnumber];
rover_img = "rover.png";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38') {
        up();
        console.log("Up Arrow Key");
    }

    if (keypressed == '40') {
        down();
        console.log("Down Arrow Key");
    }

    if (keypressed == '37') {
        left();
        console.log("Left Arrow Key");
    }

    if (keypressed == '39') {
        right();
        console.log("Right Arrow Key");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When Up Arrow Key Is Pressed, X = "+ rover_x + "Y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <= 600) {
        rover_y = rover_y + 10;
        console.log("When Down Arrow Key Is Pressed, X = "+ rover_x + "Y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When Left Arrow Key Is Pressed, X = "+ rover_x + "Y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <= 800) {
        rover_x = rover_x + 10;
        console.log("When Right Arrow Key Is Pressed, X = "+ rover_x + "Y = "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}