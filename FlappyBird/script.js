function isCollide(a,b,c) {
if(b.x<=185 && b.x>=60){
if(a.y<c.y+15 && a.y>c.y+35-c.height)return 1;
else return -1;
}
else return 0
}
  function signum(x)
{
   if(x) return Math.abs(x)/x;
   else return 0;
}
class Sprite
{
constructor (texture)
{
this.texture=document.querySelector(texture);
this.x=0;
this.y=0;
this.origin=  this.texture.style.transformOrigin;
this.color=this.texture.style.backgroundColor;
this.width=this.texture.offsetWidth;
this.height=this.texture.offsetHeight
}
#update()
{this.texture.style.backgroundColor=this.color;
 
 this.texture.style.transformOrigin=this.origin;
}
#updatePosition()
{
    this.texture.style.left=this.x+'px';
    this.texture.style.bottom=this.y+'px';
}
setPosition(x,y)
{this.x=x;
 this.y=y;
 this.#updatePosition();
}
setOrigin(x,y)
{ let str=x+' '+y;
  this.origin=str;
  this.#update();

}
getPosition()
{
    return [this.x,this.y];
}
getPositionX()
{
return this.x;
}
getPositionY()
{
    return this.y;
}
getOrigin()
{
    return this.origin;
}
move(x,y)
{this.x+=x;
this.y+=y;
this.#updatePosition();
}

glideTime(x,y,seconds)
{let fx=this.x+x;
 let fy=this.y+y;
 let timer=0;
 let glider=setInterval(()=>
 {this.x=this.x+signum(x);
if(x && y)this.y=this.y+signum(y)*Math.abs(y/x);
else this.y=this.y+signum(y)
  this.#updatePosition();
  timer+=2;
  if(timer==seconds*100)clearInterval(glider);
  console.log(timer);
  },20);

}
setColor(color)
{
    this.color=color;
    this.#update();
}
};
function reset()
{
play=false;
score=0;
bird.setPosition(150,-200);
wall.setPosition(900,54);
}
function Play()
{   
play=true;
}
let button=document.querySelector('.test');
let bird=new Sprite('.circle');
let wall=new Sprite('.wall');
let gap=new Sprite('.gap');
let play=false;
let score=0;
bird.setPosition(150,-200);
wall.setPosition(900,54);
gap.setPosition(0,Math.random()*-350);
setInterval(()=>{if(play){wall.move(-10,0) ;
    if(bird.y>-450)bird.move(0,-3);
    if(wall.x<0){wall.setPosition(900,54),gap.setPosition(0,Math.random()*-350);score++;} 
    if(isCollide(bird,wall,gap)<0){play=false;alert("Your score is "+score);reset();}
}},20)
document.addEventListener('keypress', (event) => {
    if(!play)return;
    var code = event.code;
    if(event.code=="Space" && bird.y<-20 )bird.move(0,50);
}, false);

