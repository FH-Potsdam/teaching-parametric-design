class meinKlasse {
  constructor (x) {
    this.parameterX = x; 
  }

  move () {
    this.parameterX += 1;
  }
}

const irgendeinName = new meinKlasse(10);

