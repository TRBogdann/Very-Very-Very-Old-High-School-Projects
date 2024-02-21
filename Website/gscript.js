let row=document.querySelector(".row");

function add(i,column)
{
  let image=new Image();
  if(i!=17 && i!=75 && i!=76)image.src="GalleryKA102/Granada/g"+i+".jpeg";
  if(i==200){
    image.src="GalleryKA102/Granada/g"+17+".jpeg";
    let image2=new Image();
    image2.src="GalleryKA102/Granada/g"+149+".jpeg";
    column.appendChild(image2);
    image2.src="GalleryKA102/Granada/g"+153+".jpeg";
    column.appendChild(image2);
    image2.src="GalleryKA102/Granada/g"+157+".jpeg";
    column.appendChild(image2);
    image2.src="GalleryKA102/Granada/g"+161+".jpeg";
    column.appendChild(image2);
    image2.src="GalleryKA102/Granada/g"+145+".jpeg";
    column.appendChild(image2);
    }
  column.appendChild(image);
}
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+4)add(i,column);
if(x==3)add(200,column);
row.appendChild(column);
}
create(1,140,row);create(2,146,row);create(3,162,row);create(4,144,row);

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
 

  