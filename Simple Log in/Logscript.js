var DataBasestruct=
[
{
username:undefined,
password:undefined
}
]

var user="Bogdan",pass="Bogdan27";
var x=document.getElementById('Username');
var y=document.getElementById('Password');
var z=document.getElementById('Rf');
var button=document.querySelector("#B1")
var is_valid=false

button.addEventListener(
"click",
function ( )
{if(x.value==user && y.value==pass)is_valid=true;
    console.log(is_valid);
   if(is_valid) window.location ="Log.html";
   else z.textContent="password or username incorrect";
}
,
false
);




