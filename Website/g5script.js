let row=document.querySelector(".row");
let row1=document.querySelector(".row1");
let row2=document.querySelector(".row2");
let row3=document.querySelector(".row3");
function add(i,column)
{
  let image=new Image();
 image.src="GalleryKA102/Intership/i"+i+".jpeg";
 
  if(i!=32 && i!=34)column.appendChild(image);
}
function create(x,y,row){
let column=document.createElement("div");
column.classList.add("column");
for(i=x;i<=y;i=i+4)add(i,column);
row.appendChild(column);
}
create(1,23,row);create(2,27,row);create(3,27,row);create(4,27,row);
create(28,58,row1);create(29,58,row1);create(30,58,row1);create(31,58,row1);
create(59,75,row2);create(60,75,row2); create(61,75,row2); create(62,75,row2);
create(78,105,row3);create(79,105,row3);create(80,105,row3);create(81,105,row3);


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
 

  