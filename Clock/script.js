setInterval(setClock,1000)
const secondHand=document.querySelector('[secondhand]');
const minuteHand=document.querySelector('[minutehand]');
const hourHand=document.querySelector('[hourhand]');
function setClock()
{
const currentDate=new Date();
const secondRatio= currentDate.getSeconds()/60;
const minuteRatio=(currentDate.getMinutes()+secondRatio)/60;
const hourRatio=(currentDate.getHours()+minuteRatio)/12;
setRotation(secondHand,secondRatio);
setRotation(minuteHand,minuteRatio);
setRotation(hourHand,hourRatio);
console.log(secondRatio*360);
}
function setRotation(element,ratio)
{
    element.style.setProperty('--rotation',ratio * 360);
}