var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle , wall1 , wall2  ;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  wall1 = new Ground(0,325,10,650);
  wall2 = new Ground(800,325,10,650);


  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for( var j = 75; j <= width-20; j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for(j = 50; j<=width-30; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  for(j = 50; j<=width-40; j = j+50){
    plinkos.push(new Plinko(j,475));
  }

  
  
    
}
 


function draw() {

  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 700), 0, 7, random(0, 360));
    particles.push(particle);
  }
  

  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
   }

   wall1.display();
   wall2.display();
  

}