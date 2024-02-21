let row=document.querySelector(".row");

function add(i,column)
{
  let image=new Image();
   image.src="GalleryKA102/Sevilla2/s"+i+".jpg";
  column.appendChild(image);
}
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+4)if(i!=43)add(i,column);
if(x==4)add(43,column);
row.appendChild(column);
}
create(1,45,row);create(2,45,row);create(3,45,row);create(4,45,row)
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
 

  