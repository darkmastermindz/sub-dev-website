var pierreImg = new image();
pierreImg.src = "images/sprS_walkrighttest";

function sprite (options) {
  var spr = {};

  spr.context = options.context;
  spr.width = options.width;
  spr.height = options.height;
  spr.image = options.image;

  return this;

}

var canvas = document.getElementById("pierreAnimation");
canvas.width = 100;
canvas.height = 100;

var pierre = sprite({
  content: canvas.getContext("2d"),
  width: 100,
  height: 100,
  image: pierreImg;
})

function sprite (options) {
    spr.render = function () {

        // Draw the animation
        spr.context.drawImage(
           spr.image,
           0,
           0,
           spr.width,
           that.height,
           0,
           0,
           spr.width,
           spr.height);
    };

}

pierre.render();
