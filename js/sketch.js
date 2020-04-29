let tiles = 30

function setup() {
  let c = createCanvas(900, 900)

  tileSize = width / tiles
  
  noStroke()
  noLoop()
}

function draw() {
  background('#fafafa')

  for (var y = 0; y < height; y = y + tileSize) {
    for (var x = 0; x < width; x = x + tileSize) {
      r = int(random(0, 4))
      if (r == 0) {
        halfr(x, y, tileSize, 'n')
      } else if (r == 1) {
        halfr(x, y, tileSize, 's')
      } else if (r == 2) {
        halfr(x, y, tileSize, 'e')
      } else if (r == 3) {
        halfr(x, y, tileSize, 'w')
      }
    }
  }
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}

function halfr(x, y, size, orientation) {

  if (orientation == 'w') {
    fill(0 )
    beginShape()
    vertex(x,y)
    vertex(x + size / 2, y + size / 2)
    vertex(x, y + size)
    endShape()
    
  }

  if (orientation == 'e') {
    fill(0)
    beginShape()
    vertex(x + size, y)
    vertex(x + size / 2, y + size / 2)
    vertex(x + size, y + size)
    endShape()
  }

  if (orientation == 'n') {
    fill(0)
    beginShape()
    vertex(x,y)
    vertex(x + size / 2, y + size /2)
    vertex(x + size, y)
    endShape()
  }

  if (orientation == 's') {
    fill(0)
    beginShape()
    vertex(x,y + size)
    vertex(x + size / 2, y + size /2)
    vertex(x + size, y + size)
    endShape()
  }

} 