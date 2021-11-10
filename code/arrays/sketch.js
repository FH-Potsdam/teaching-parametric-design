// Leeres Array erstellen
const arr = [];
// Limit für die Anzahl der Punkte festlegen
const max = 20;
for (let a = 0; a < max; a += 1) {
  // Ein Objekt mit x/y in das obige Array einfügen
  arr.push({
    x: Math.random() * 400,
    y: Math.random() * 400
  });
}

// Nun nehmen wir die Linien aus je einem Start- und Endpunkt und teilen diese in kleinere Segmente auf.
// Dabei soll jedes Segment maximal eine Länge von maxDist haben:
const maxDist = 10;

// Die neuen Punkte für die Segmente legen wir in eine neues Array.
// Den Ursprung legen wir bereits in das Array:
const arrDetailed = [arr[0]];

// Nun gehen wir durch die Linien hindurch. Wir start mit a = 1, weil wir immer ein Set aus Start- und Endpunkt benötigen und der erste Punkt hat ja keinen Punkt vor sich.
 for (let a = 1; a < max; a += 1) {
  // Endpunkt aktueller Puntk, Startpunkt der vorherige (deshalb a = 1)
  const start = arr[a - 1];
  const end = arr[a];

  // X/Y Abstand zwischen den Punkten bestimmen
  const distX = end.x - start.x;
  const distY = end.y - start.y;

  // Basierend auf dem X/Y-Abstand die tatsächliche Distanz bestimmen (siehe Pythagoras)
  const dist = 
    Math.sqrt(
      Math.pow(distX,2) +
      Math.pow(distY,2)
    );

  // Um zu bestimmen, in wieviele Segmente wir die aktuelle Linie einteilen, teilen wir die Länge durch maxDist.
  // Das Ergebnis wird aufgerundet, damit wir nicht manchmal 0 Segmente oder eins zu wenig haben.
  const count = Math.ceil(dist / maxDist);
  
  // Nun gehen wir die Segmente durch und berechnen die neuen x/y-Koordinaten.
  for (let c = 1; c <= count; c += 1) {
    arrDetailed.push({
      x: start.x + distX / count * c,
      y: start.y + distY / count * c
    });
  }
}

// Wir wollen bei jeder draw-Iteration ein weiteres segment malen, deshalb erstellen wir uns eine variable,
// welche festhält, bis zu welchem segment aktuell gezeichnet werden soll:
let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  
  // Der for-loop malt so viele segmente, bis der wert des counters erreicht ist
  for (let a = 1; a < counter; a += 1) {
    // Um die Segmente deutlicher zu machen, sollen die Segmente abwechselnd in einer anderen Farbe gezeichnet werden.
    // Mit variable%2 === 0 können wir feststellen, ob eine Zahl gerade oder ungerade ist. 
    if (a%2 === 0) {
      stroke('red');
    } else {
      stroke('white');
    }
    beginShape();
    vertex(
      arrDetailed[a-1].x,
      arrDetailed[a-1].y
    );
    vertex(
      arrDetailed[a].x,
      arrDetailed[a].y
    );
    endShape();
  }
  // Damit bei der nächsten Iteration ein Segment mehr gezeichnet wird, erhöhen wir die Variable counter um eins.
  counter += 1;

  // Wenn der counter größer wird, als wir tatsächliche Punkte in unserem Array haben, würden wir eine Fehlermeldung bekommen.
  // Deshalb müssen wir sicherstellen, dass der Wert nie größer wird als die Anzahl der Punkte:
  if (counter > arrDetailed.length) {
    counter = arrDetailed.length;
    // Nachdem alle Segmente gezeichnet wurden, speichern wir das Bild und beenden die Draw-Iterationen
    save();
    noLoop();
  }
}

