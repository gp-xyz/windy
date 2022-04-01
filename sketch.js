var windbits = [];
var framecount =1;

var wind_speeds = [1,2,3];
var wind_gusts = [7,20,200];
var wind_sizes = [2,4,6,14,70]; 
var wind_lengths = [3,5,6,10]; 
var wind_intervals = [1,10,45];
var colors =["#17c3b2","#ffcb77","#fef9ef","#fe6d73","#3f7cac","#ffffff","#000000"];
var wind_speed ;
var wind_gust ;
var wind_size;
var wind_length ;
var wind_interval ;
var c1;
var c2;


function setup() {
  createCanvas(600, 600);
  background(220);
   c1 = color(random(colors));
   c2 = color(random(colors));
   if( c1==c2){
    c2 = color(random(colors));
   }
   wind_speed = random(wind_speeds);
   wind_gust = random(wind_gusts);
   wind_size = random(wind_sizes);
   wind_length = random(wind_lengths);
   wind_interval = random(wind_intervals);


  for (let i = 0; i <=  height; i++) {
    let inter =  map(i, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, width, i);
  }

 
}

function draw() {
  // print(wind_speed)
  // create new windbits to draw
  if (framecount % wind_interval == 0)
  {
    for (let i=0;i<wind_gust;i++){
      var new_wind = new WindBit(random(width),random(height),wind_speed,wind_size,c1,c2,wind_length);
      windbits.push(new_wind);
    }

  }

  for (let i =0; i<windbits.length;i++){
    windbits[i].show();
  }

  framecount++;

}
