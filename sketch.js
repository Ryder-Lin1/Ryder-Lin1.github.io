class tile {
  constructor(i, j, piece = null) {
    this.i = i
    this.j = j
    this.piece = piece
    this.selected = false
    this.col = null
  }

  show() {
    let {
      i,
      j
    } = this
    strokeWeight(1);
    noStroke();
    if (!this.col) {
      fill("#DCD9CD")
      if (i % 2 == 1) {
        if (j % 2 == 0)
          fill("#70552f")
      } else if (i % 2 != 1) {
        if (j % 2 != 0)
          fill("#70552f")
      }
    }else{
     fill(this.col); 
    }

    rect(this.x, this.y, scl, scl);
    
    if (this.selected) {
      let col = color(101)
      if (this.i % 2 == 1) {
        if (this.j % 2 == 0)
          col = color(51)
      } else if (this.i % 2 != 1) {
        if (this.j % 2 != 0)
          col = color(51)
      }
      fill(col)
      rect(this.x, this.y, scl, scl);
      
      if(!this.col)
      this.piece.showMoves();
    }
    if (this.piece) {
      image(this.piece.image, this.x, this.y);
    }
    this.col = null
  }

  get x() {
    return this.i * scl
  }

  get y() {
    return this.j * scl
  }

  contains(p) {
    let {
      x,
      y
    } = this
    return Findpoint(x, y, x + scl, y + scl, p.x, p.y)
  }
}

function Findpoint(x1, y1, x2, y2, x, y) {
  return (x > x1 && x < x2 && y > y1 && y < y2)
}
