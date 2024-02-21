
let frontButton=document.querySelector(".b1");
let frontButton2=document.querySelector(".b2");
let frontButton3=document.querySelector(".b3");
let frontButton4=document.querySelector(".b4");
let frontButton5=document.querySelector(".b5");
let frontButton6=document.querySelector(".b6");
let frontButton7=document.querySelector(".b7");
let frontButton12=document.querySelector(".b12");
let frontButton22=document.querySelector(".b22");
let frontButton32=document.querySelector(".b32");
let frontButton42=document.querySelector(".b42");
let frontButton52=document.querySelector(".b52");
let frontButton62=document.querySelector(".b62");
let frontButton72=document.querySelector(".b72");
let slide1=document.querySelector(".rarrow");
let slide0=document.querySelector(".larrow");
let area=document.querySelector(".area");
let menu=document.querySelector(".menu");
let bubbles=document.querySelector(".bubbles");
let bb1=document.querySelectorAll(".bubble");
let next=document.querySelector(".next");
let k=false
let index=1;
slide0.style.backgroundImage="url(LeftArrow.png)";
slide1.style.backgroundImage="url(RightAroow.png)";
slide0.classList.remove("larrow");
area.style.marginLeft="0";
menu.style.marginLeft="0";
bubbles.style.marginLeft="0";
next.style.marginLeft="0";
document.getElementById("mySidebar").style.color="transparent";
frontButton.addEventListener('click', function () {
            window.location.href = "GalleryGranada.html";
            });
 frontButton2.addEventListener('click', function () {
              window.location.href = "GalleryMalaga.html";
              });
 frontButton3.addEventListener('click', function () {
                window.location.href = "GallerySevilla.html";
                });
 frontButton4.addEventListener('click', function () {
                  window.location.href = "GalleryCordoba.html";
                  });
 frontButton5.addEventListener('click', function () {
              window.location.href = "GalleryIntership.html";
              });
 frontButton6.addEventListener('click', function () {
                window.location.href = "GalleryVideo.html";
                });
 frontButton7.addEventListener('click', function () {
                  window.location.href = "GalleryExtra.html";
                  });
                  frontButton12.addEventListener('click', function () {
                    window.location.href = "GalleryGranada2.html";
                    });
         frontButton22.addEventListener('click', function () {
                      window.location.href = "GalleryMalaga2.html";
                      });
         frontButton32.addEventListener('click', function () {
                        window.location.href = "GallerySevilla2.html";
                        });
         frontButton42.addEventListener('click', function () {
                          window.location.href = "GalleryCordoba2.html";
                          });
         frontButton52.addEventListener('click', function () {
                      window.location.href = "GalleryIntership2.html";
                      });
         frontButton62.addEventListener('click', function () {
                        window.location.href = "GalleryVideo2.html";
                        });
         frontButton72.addEventListener('click', function () {
                          window.location.href = "GalleryExtra2.html";
                          });
function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 
  slide1.addEventListener('click', function () {
    if(index<7 && k==false){ x=parseFloat(area.style.marginLeft)-12.5;
     
        if(index+1==2){menu.style.backgroundColor="rgb(138,43,226)";slide0.classList.add("larrow");}
        if(index+1==3)menu.style.backgroundColor="green";
        if(index+1==4)menu.style.backgroundColor="red";
        if(index+1==5)menu.style.backgroundColor="orange";
        if(index+1==6)menu.style.backgroundColor="blue";
        if(index+1==7)menu.style.backgroundColor="violet";
        if(index+1==7)slide1.classList.remove("rarrow");
        const idx=index;
        bb1[idx].style.backgroundColor="white";
        bb1[idx-1].style.backgroundColor="grey";
  let slider=setInterval(() => {
    k=true;
   
    
    area.style.marginLeft=parseFloat(area.style.marginLeft)-0.5+"%";
    menu.style.marginLeft=parseFloat(menu.style.marginLeft)+4+"vw";
    bubbles.style.marginLeft=parseFloat(bubbles.style.marginLeft)+4+"vw";
    next.style.marginLeft=parseFloat(next.style.marginLeft)+4+"vw";

    if(parseFloat(area.style.marginLeft)<=x){clearInterval(slider);index++;k=false;}
   
  },15);}
    });
    slide0.addEventListener('click', function () {
        if(index>1 && k==false){ x=parseFloat(area.style.marginLeft)+12.5;
         
   
        if(index-1==1){menu.style.backgroundColor="#FBDD7A";slide0.classList.remove("larrow")}
        if(index-1==2)menu.style.backgroundColor="rgb(138,43,226)";
        if(index-1==3)menu.style.backgroundColor="green";
        if(index-1==4)menu.style.backgroundColor="red";
        if(index-1==5)menu.style.backgroundColor="orange";
        if(index-1==6)menu.style.backgroundColor="blue";
        if(index-1==6)slide1.classList.add("rarrow");
        const idx=index;
        bb1[idx-2].style.backgroundColor="white";
        bb1[idx-1].style.backgroundColor="grey";
      
  
      let slider=setInterval(() => {
        k=true;
  
        area.style.marginLeft=parseFloat(area.style.marginLeft)+0.5+"%";
        menu.style.marginLeft=parseFloat(menu.style.marginLeft)-4+"vw";
        bubbles.style.marginLeft=parseFloat(bubbles.style.marginLeft)-4+"vw";
        next.style.marginLeft=parseFloat(next.style.marginLeft)-4+"vw";
        if(parseFloat(area.style.marginLeft)>=x){clearInterval(slider);index--;k=false;}
      

      },15);}
        });  