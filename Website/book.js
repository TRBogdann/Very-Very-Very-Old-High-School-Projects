
let slide1=document.querySelector(".rarrow");
let slide0=document.querySelector(".larrow");
let area=document.querySelector(".area");
let menu=document.querySelector(".menu");
let next=document.querySelector(".next");
slide0.style.backgroundImage="url(LeftArrow.png)";
slide1.style.backgroundImage="url(RightAroow.png)";
area.style.marginLeft="0";
menu.style.marginLeft="0";
next.style.marginLeft="0";
let Items=document.querySelectorAll(".item");
document.getElementById("mySidebar").style.color="transparent";

function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  let zArray=[0,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1] 
  let ok=1;
  function SortASC(left,right)
  {
  for(k=left;k<right;k++)
  for(j=k+1;j<=right;j++)
  if(zArray[k]>zArray[j])[zArray[k],zArray[j]]=[zArray[j],zArray[k]];
  
  }
  
  function SortDES(left,right)
  {
  for(k=left;k<right;k++)
  for(j=k+1;j<=right;j++)
  if(zArray[k]<zArray[j])[zArray[k],zArray[j]]=[zArray[j],zArray[k]];
  
  }
  function refresh(index)
  {
  SortASC(0,21);
  [zArray[index],zArray[21]]=[zArray[21],zArray[index]];
  if(index+1<21)SortDES(index+1,21);
  if(index-1>0)SortASC(0,index-1);
   }
  
 
  i=1;
  
  
  for(j=0;j<22;j++)
  Items[j].style.zIndex=zArray[j];
  
  
  
   async function rotate1()
  {

  if((i>=0 && i<=20) && ok){
  
  
  refresh(i);
  for(j=0;j<22;j++)
  Items[j].style.zIndex=zArray[j];
  await sleep(100);
  
  
      Items[i].classList.add("rotate-left");
      Items[i].classList.remove("rotate-right");
  
      i++;
  ok=0;
  await sleep(500)
  ok=1
 
  }
  }
  async function rotate2()
  {
  if((i>=1 && i<=21) && ok){
    
    refresh(i-1);
    for(j=0;j<22;j++)
    Items[j].style.zIndex=zArray[j];
    await sleep(100);
    
  Items[i].classList.add("rotate-right");
  Items[i].classList.remove("rotate-left");
  i--;
  
  ok=0;
  await sleep(500);
  ok=1;
  
  }
  
  }