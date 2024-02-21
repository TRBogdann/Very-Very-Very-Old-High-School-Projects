let row=document.querySelector(".row");

function add(i,column)
{
  let image=new Image();
 image.src="GalleryKA102/Cordoba2/c"+i+".jpg";
  column.appendChild(image);
}
create(1,40,row);create(2,40,row);create(3,40,row);
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+3){if(i!=13)add(i,column);
  
}
if(x==2)add(13,column)
row.appendChild(column);
}

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
 

  