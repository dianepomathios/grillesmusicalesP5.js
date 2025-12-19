let grille = 20;
let sound;
let amp;
let img;
let img2;

let effet1Play = true;
let effet2Play = true;

let effetActuel = 1;
let nbEffet = 9;

function preload(){
  sound = loadSound('sound/PinkPantheress - Ophelia.mp3')
  img = loadImage('sound/image/panda.jpg')
  img2 = loadImage('sound/image/feathers - Copy.png')
}


let marge = 30;
function setup() {

    angleMode(DEGREES)
    colorMode(HSL)
    //colorMode(RGB)
 createCanvas(windowWidth, windowHeight);
 img.resize(width,height)
 img2.resize(width,height)

 
frameRate(10)

 amp = new p5.Amplitude();

}

let zoom =0.003;
let temps =0;

function draw() {




   let level = amp.getLevel();
  // console.log(level)
   temps = temps+level*0.2;//vitesse..
   background(255)
   fill(0)
noStroke()


switch(effetActuel){
  case 1: effet1(); break;
  case 2: effet2(); break;
  case 3: effet3(); break;
  case 4: effet4(); break;
  case 5: effet5(); break;
  case 6: effet6(); break;
  case 7: effet7(); break;
  case 8: effet8(); break;
  case 9: effet9(); break;
  // case 10: effet10(); break;
  // case 11: effet11(); break;
  // case 12: effet12(); break;
  // case 13: effet13(); break;
  // case 14: effet14(); break;
  // case 15: effet15(); break;
}

       
 }
   



function mousePressed(){
 let lecture = sound.isPlaying();
 if(lecture == false){
      sound.play()
 }

    
}

function keyPressed() {

  // Effet 1 → touche 1
  if(key === 'a') effetActuel = 1;

  // Effet 2 → touche 2
  if(key === 'z') effetActuel = 2;

  // Effet 3 → touche 3
  if(key === 'e') effetActuel = 3;

  // Effet 4 → touche 4
  if(key === 'r') effetActuel = 4;

  // Effet 5 → touche 5
  if(key === 't') effetActuel = 5;

  // Effet 6 → touche 6
  if(key === 'y') effetActuel = 6;

  // Effet 7 → touche 7
  if(key === 'u') effetActuel = 7;

  // Effet 8 → touche 8
  if(key === 'i') effetActuel = 8;

  // Effet 9 → touche 9
  if(key === 'o') effetActuel = 9;

  // // Effet 10 → touche 0
  // if(key === 'p') effetActuel = 10;

  // if(key === 'q') effetActuel = 11;

  // if(key === 's') effetActuel = 12;

  // if(key === 'd') effetActuel = 13;

  // if(key === 'f') effetActuel = 14;

  // if(key === 'g') effetActuel = 15

  console.log("Effet sélectionné :", effetActuel);
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function effet1(){

  background(260,59,5)


     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)*grille*0.8
  
      
          fill(296,59,88)
        ellipse (x,y,noise3d)

        fill(260,59,5)
        ellipse (x,y,5)


         
      }
   
 }
 }

function effet2(){

  background(260,59,5)

     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)*360
        //  fill(noise3d,100,50)
        //  text('hi', x, y, noise2d);
       stroke(350,65,30)
       push()
        translate(x,y)
        rotate(noise3d)
    line(0,0,0,grille*10 )
         pop()
      }
   
 }
 }

//  function effet3(){
//      for (let x = marge; x <width-marge; x+=grille) {
//       for (let y = marge; y<height-marge; y+=grille) {
//         // fill(random(frameCount*1.5))

         
//          let seed = y*x
//          //let s = noise(seed+frameCount*0.1)*grille*2
        
//          /// teinte finale entre 150 et 250
//          let paramX=x*zoom;
//          let paramY =y*zoom;

//          //let temps= level;

//          let noise3d = noise(paramX,paramY,temps)*360

//          let filtre = noise(paramX,paramY,temps)//valeur entre 0 et 1 

//         if(filtre>0.5){
//             fill(260,50,50)
//           ellipse(x,y,grille)
//         } else if(filtre>0.4 ) {
//                 fill (360,50,50)
//             text('NOT',x,y)
//             }
        

//          fill(noise3d,100,50)
//         //  text('hi', x, y, noise2d);
//        stroke(5,100,50)
//        push()
//         translate(x,y)
//         rotate(noise3d)
//      // line(0,0,0,grille*10 )
//          pop()
//       }
   
//  }
//  }


//  function effet3(){
// blendMode(BLEND)
// image(img,0,0)
//      for (let x = marge; x <width-marge; x+=grille) {
//       for (let y = marge; y<height-marge; y+=grille) {
//         // fill(random(frameCount*1.5))

         
//          let seed = y*x
//          //let s = noise(seed+frameCount*0.1)*grille*2
        
//          /// teinte finale entre 150 et 250
//          let paramX=x*zoom;
//          let paramY =y*zoom;

//          //let temps= level;

//          let noise3d = noise(paramX,paramY,temps)*360

//          let filtre = noise(paramX,paramY,temps)//valeur entre 0 et 1 

//          if(filtre>0.5){
//         blendMode(REMOVE)
//          noStroke()
//          text('OPHELIA',x,y, grille)
//         //  ellipse(x,y,grille)
//          }

//          blendMode(BLEND)
      
//       }
   
//  } 

// blendMode(BLEND)
//  }

 function effet3(){
     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)*360
         fill(noise3d,100,5)
        square(x,y,grille)


         
      }
   
 }
 }

 
//  function effet6(){
//      for (let x = marge; x <width-marge; x+=grille) {
//       for (let y = marge; y<height-marge; y+=grille) {
//         // fill(random(frameCount*1.5))

         
//          let seed = y*x
//          //let s = noise(seed+frameCount*0.1)*grille*2
        
//          /// teinte finale entre 150 et 250
//          let paramX=x*zoom;
//          let paramY =y*zoom;

//          //let temps= level;

//          let noise3d = noise(paramX,paramY,temps)*100

//          let filtre = noise(paramX,paramY,temps)//valeur entre 0 et 1 

//         if(filtre>0.5){
//             fill(260,50,50)
//           ellipse(x,y,grille)
//         } else if(filtre>0.4 ) {
//                 fill (360,50,50)
//             text('☝',x,y)
//             } else if(filtre>0.3 ) {
//                 fill (200,100,60)
//             text(':3',x,y)
//             }else if(filtre>0.2) {
//                 fill (200,100,60)
//              square(x,y,grille)
//             }
        
        
        

//         //  fill(noise3d,100,50)
//         //  text('hi', x, y, noise2d);
//        stroke(300,100,50)
//        push()
//         translate(x,y)
//         rotate(noise3d)
//      // line(0,0,0,grille*10 )
//          pop()
//       }
   
//  }
//  }
  
 function effet4(){

   background(260,59,5)

     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)*grille*360
        //  fill(noise3d,100,50)
        //  text('hi', x, y, noise2d);
      strokeWeight(random(1,4))
      stroke(310,80,50)
       push()
        translate(x,y)
        rotate(noise3d)
    line(0,0,0,grille*10 )
         pop()
      }
   
 }
 }

 function effet5(){

   background(260,59,5)
   
     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
      
         
         let seed = y*x
        
         let paramX=x*zoom;
         let paramY =y*zoom;

    let noise3d = noise(paramX,paramY,temps)*grille*100
      push()
      translate(x,y)
      rotate(noise3d)
      // strokeWeight(5)
      // stroke(0)
      // noFill()
      // fill(0)
	    // square(0,0,grille)

      noStroke()
      fill(346, 64.8, 31.2)
      text('✿',x,y, grille)
    
      fill(311 ,47.4, 70.2)
      text('OPHELIA',x,y, grille)

      pop()
      }
   
 }
 }

// function effet9() {

//   let ecart = 350;
//   let level = amp.getLevel();
//   temps += level * 20;

//   strokeWeight(5);
//   noFill();
//   stroke(0);

//   for (let x = marge; x < width - marge; x += grille) {

//     beginShape();

//     for (let y = marge; y < height - marge; y += grille) {

//       let paramX = x * zoom;
//       let paramY = y * zoom;

//       let noise3d = noise(paramX, paramY, temps);
//       let offset = map(noise3d, 0, 2, 3, -ecart, ecart);
 
//       vertex(x + offset, y);
//     }

//     endShape();
//   }
// }

function effet6() {

  background(260,59,5)

  let ecart = 300;
  let level = amp.getLevel();
  temps += level * 0.7;

  stroke(290,59,10);
  noFill();
  strokeWeight(random(1,10));

  for (let y = marge; y < height - marge; y += grille) {
    
    beginShape();

    for (let x = marge; x < width - marge; x += grille) {
      
      let paramX = x * zoom;
      let paramY = y * zoom;

      let n = noise(paramX, paramY, temps);
      let offset = map(n, 0, 1, 7, -ecart, ecart);

      vertex(x, y + offset);  // dessiner toute la ligne
    }

    endShape();
  }
}

function effet7(){

  background(260,59,5)
     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
      
         
         let seed = y*x
        
         let paramX=x*zoom;
         let paramY =y*zoom;

    let noise3d = noise(paramX,paramY,temps)*grille*100
      push()
      translate(x,y)
      rotate(noise3d)
      // strokeWeight(5)
      // stroke(0)
      // noFill()
      fill(300,100,85)
	    square(0,0,grille)

       fill(260,59,5)
       
       square (x,y,noise3d)

      noStroke()
      fill(350,65,30)
      text('✿',x,y, grille)

      pop()
      }
   
 }
 }

 function effet8(){
     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;

         let noise3d = noise(paramX,paramY,temps)*grille*0.5
         
         fill(310,90,90)
        ellipse (x,y,noise3d)


         stroke(100);
            strokeWeight(random(1,5));


         let filtre = noise(paramX,paramY,temps)//valeur entre 0 et 1 


        if(filtre>0.6){
          
           ellipse(x,y,grille)
          } else if(filtre>0.5 ) {
                fill (200,100,60)
            text(':3',x,y)
            }else if(filtre>0.3) {
                fill (260,59,5)
             square(x,y,grille)
            }else if(filtre>0.2){
                fill (210,100,40)
             ellipse(x,y,grille)
            }
        
        
            
        

        //  fill(noise3d,100,50)
        //  text('hi', x, y, noise2d);
       push()
        translate(x,y)
        rotate(noise3d)
     // line(0,0,0,grille*10 )
         pop()


         
      }
   
 }
 }


//  function effet13(){
//      for (let x = marge; x <width-marge; x+=grille) {
//       for (let y = marge; y<height-marge; y+=grille) {
//         // fill(random(frameCount*1.5))

         
//          let seed = y*x
//          //let s = noise(seed+frameCount*0.1)*grille*2
        
//          /// teinte finale entre 150 et 250
//          let paramX=x*zoom;
//          let paramY =y*zoom;

//          //let temps= level;

//          let noise3d = noise(paramX,paramY,temps)*360

         
    
//        push()
//         translate(x,y)
//         rotate(noise3d)
//         stroke(noise3d,100,70)
//         strokeWeight(random(0,5))
//     line(0,0,0,grille*2 )
//          pop()
//       }
   
//  }
//  }

// function effet14() {

//   background(0)

//   // imageMode(CENTER); // important pour que l’image soit centrée comme l’ellipse

//   for (let x = marge; x < width - marge; x += grille) {
//     for (let y = marge; y < height - marge; y += grille) {

//       let paramX = x * zoom;
//       let paramY = y * zoom;

//       let noise3d = noise(paramX, paramY, temps)*grille*5;

    
//       image(img2, x, y, noise3d, noise3d);

//     }
//   }
// }


 function effet9(){

imageMode(CENTER)
  
    background(0)

     for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
      
         
         let seed = y*x
        
         let paramX=x*zoom;
         let paramY =y*zoom;

  let noise3d = noise(paramX,paramY,temps)*grille*100


      push()
      translate(x,y)
      rotate(noise3d)

      let alpha = random(0, 3);
      tint(255, alpha);    
	    image(img2, x,y,grille*4,grille*4)

      noTint();

      pop()
      }
   
 }
 }
