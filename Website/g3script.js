let row=document.querySelector(".row");

function add(i,column)
{
  let image=new Image();
   image.src="GalleryKA102/Extra/e"+i+".jpeg";
  column.appendChild(image);
}
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+4)add(i,column);
row.appendChild(column);
}
create(1,88,row);create(2,88,row);create(3,91,row);create(4,91,row)
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
 

  