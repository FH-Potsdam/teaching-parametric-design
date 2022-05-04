/* export SVG
DDF 2018
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/


    //ALLES NUR KOPIERT!!


    var cnv;

    var wid = 400;
    var hei = 400;
    
    var NB_FRAMES = 100;
    
    var frame_count = 0;
    
    function activation(t) {
        return ((1-cos(2*PI*t))/2)**1;
    }
    
    const lines = [];
    
    
    function setup() {
      createCanvas(wid,hei);
    }
    
    
    var NB = 100;
    
    function draw() {
      background(0);
        
      var t = ((frame_count)%NB_FRAMES)/NB_FRAMES;
        
        for(var i=0;i<NB;i++){
            
          var x0 = lerp(0,wid,i/NB);
          
          theta = PI/2;
          
          var xx = x0;
          var yy = 0;
          
          var Nt = 75;
          
          var step = hei/Nt;
          
          var turn = lerp(0,0.4,activation((i/NB+0*t)%1));
          
          stroke(255);
          strokeWeight(0.2);
          noFill();
          beginShape();
          
          vertex(xx,yy);
  
          
          for(var ii = 0; ii <= Nt; ii++){
              theta += turn*sin(100*noise(1000)+2*PI*(15*noise(0.2*i/NB, 0.02*ii)+t));
              xx += step*cos(theta);
              yy += step*sin(theta);
              
              var xx2 = lerp(xx,x0,(ii/Nt)*(ii/Nt)*(ii/Nt));
              var yy2 = lerp(yy,lerp(0,hei-0,ii/Nt),max((ii/Nt),1-sqrt(ii/Nt)));
              
              vertex(xx2,yy2);

              
          }
          endShape();

        }
      
      noStroke();
      fill(255);
        // text("seed : " + curSeed, 10, 10);
    
        frame_count++;
      
      //////////////////////////////////////EXPORT
      if (keyCode === LEFT_ARROW){
          save("mySVG.svg");
        print ("saved svg");
      noLoop();	}
    }