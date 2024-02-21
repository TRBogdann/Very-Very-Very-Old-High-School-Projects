let row=document.querySelector(".row");
let row1=document.querySelector(".row1");
let row2=document.querySelector(".row2");
let row3=document.querySelector(".row3");
function add(i,column)
{
  let image=new Image();
 image.src="GalleryKA102/Intership2/i"+i+".jpg";
 
  column.appendChild(image);
}
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+4)add(i,column);
row.appendChild(column);
}
create(1,71,row);create(2,69,row);create(3,68,row);create(4,71,row);


document.getElementById("mySidebar").style.color="transparent";
frontButton.addEventListener('click', function () {
            window.location.href = "page3.html";
            });

function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 
 

  