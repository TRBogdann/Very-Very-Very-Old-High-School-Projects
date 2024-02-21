let row=document.querySelector(".row");
let row1=document.querySelector(".row1");
let row2=document.querySelector(".row2");
let row3=document.querySelector(".row3");
let row4=document.querySelector(".row4");
function add(i,column)
{
  let image=new Image();
  if(i!=17 && i!=75 && i!=76)image.src="GalleryKA102/Granada2/g"+i+".jpg";
  if(i==200)image.src="GalleryKA102/Granada2/g"+17+".jpg"
  column.appendChild(image);
}
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+4)add(i,column);
if(x==3)add(200,column);
row.appendChild(column);
}
create(1,100,row);create(2,100,row);create(3,109,row);create(4,109,row);

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
 

  