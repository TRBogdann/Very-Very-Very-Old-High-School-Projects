let row=document.querySelector(".row");

function add(i,column)
{
  let image=new Image();
 image.src="GalleryKA102/Malaga2/m"+i+".jpg";
  column.appendChild(image);
}
create(1,5,row);
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+1)add(i,column);

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
 

  