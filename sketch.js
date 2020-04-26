




//ventana

var MW,MH



function setup() {
  createCanvas(windowWidth, windowHeight);
  MW=windowWidth/2
  MH=windowHeight/2
}

function draw() {
  clear()
  Lineas(0,0,windowWidth,windowHeight)
  Lineas(MW,0,MW,windowHeight)
  Lineas(windowWidth,0,0,windowHeight)
  Lineas(0,MH,windowWidth,MH)
}

function Lineas(x1, y1, x2, y2) {
  let lim
  let dx=x2-x1
  let dy=y2-y1

  
  if(Math.abs(dx)>Math.abs(dy))
    lim=Math.abs(dx)
  else
    lim=Math.abs(dy)

  let xi=dx/lim
  let yi=dy/lim
  let x=x1
  let y= y1
  
  for(let i=0;i<lim;i++)
  {
    point(x, y)
    x+=xi
    y+=yi
  }




  


}

