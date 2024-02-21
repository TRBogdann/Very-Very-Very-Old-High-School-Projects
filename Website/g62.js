let vv=document.querySelector(".vv");
let vs=document.querySelector(".vs");
let rarrow=document.querySelector(".rarrow");
let larrow=document.querySelector(".larrow");
larrow.classList.remove("larrow");
let k=true;
let v=[1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1];
let i=1;
vv.style.height="80rem";
vs.setAttribute('src',"GalleryKA102/Video2/v1.mp4");
vv.load();
rarrow.addEventListener('click', function () {
 if(k && i<6){i++;
  if(i==2)larrow.classList.add("larrow");
  if(i==6)rarrow.classList.remove("rarrow");
  if(v[i-1]){
    vv.style.width="";
    vv.style.height="80rem";
  }
  else
  {
    vv.style.height="";
    vv.style.width="80rem";
  }
 vs.setAttribute('src',"GalleryKA102/Video2/v"+i+".mp4");
 vv.load();
 k=false;
setTimeout(()=>{k=true;},250);

}

 
  });
  larrow.addEventListener('click', function () {
    if(k && i>1){i--;
     if(i==1)larrow.classList.remove("larrow");
     if(i==32)rarrow.classList.add("rarrow");
     if(v[i-1]){
       vv.style.width="";
       vv.style.height="80rem";
     }
     else
     {
       vv.style.height="";
       vv.style.width="80rem";
     }
    vs.setAttribute('src',"GalleryKA102/Video2/v"+i+".mp4");
    vv.load();
    k=false;
   setTimeout(()=>{k=true;},250);
   
   }
   
    
     });

document.getElementById("mySidebar").style.color="transparent";

function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 
