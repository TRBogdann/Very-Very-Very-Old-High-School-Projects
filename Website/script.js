let eLink=document.querySelector(".elink");
let mLink=document.querySelector(".mlink");
let iLink=document.querySelector(".ilink");
let fLink=document.querySelector(".flink");
let frontButton=document.querySelector(".b1");
document.getElementById("mySidebar").style.color="transparent";
eLink.addEventListener('click', function () {
    window.location.href = "https://ec.europa.eu/programmes/erasmus-plus/";
    });
mLink.addEventListener('click', function () {
        window.location.href = "https://www.mepegranada.com/ro/home";
        });
frontButton.addEventListener('click', function () {
            window.location.href = "AboutUs.html";
            });
iLink.addEventListener('click', function () {
         alert("Missing link ");
                });
fLink.addEventListener('click', function () {
  window.location.href = "https://www.facebook.com/initiat.implicat.integrat";
                           });
                        
function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 