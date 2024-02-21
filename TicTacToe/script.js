let player=1;
let a=[[0,0,0],[0,0,0],[0,0,0]]
let b=[[]];
let txt=document.querySelectorAll(".dv");
b[0][0]=document.querySelector(".one-one");
b[0][1]=document.querySelector(".one-two");
b[0][2]=document.querySelector(".one-three");
b.push([]);
b[1][0]=document.querySelector(".two-one");
b[1][1]=document.querySelector(".two-two");
b[1][2]=document.querySelector(".two-three");
b.push([]);
b[2][0]=document.querySelector(".three-one");
b[2][1]=document.querySelector(".three-two");
b[2][2]=document.querySelector(".three-three");
function refresh()
{location.reload();
}
function update()
{   for(i=0;i<=2;i++)if(a[i][1]==a[i][0] && a[i][0]==a[i][2] && a[i][1]!=0)
    {if(a[i][1]<0)console.log('o is the winner');
    else console.log('x is the winner');
    for(i=0;i<=2;i++)
    for(j=0;j<=2;j++)b[i][j].innerHTML='';
    return;
    }
    for(i=0;i<=2;i++)if(a[1][i]==a[0][i] && a[0][i]==a[2][i] && a[1][i]!=0)
    {if(a[1][i]<0)console.log('o is the winner');
    else console.log('x is the winner');
    for(i=0;i<=2;i++)
    for(j=0;j<=2;j++)b[i][j].innerHTML='';
    return;
    }
    if(a[1][1]==a[0][0] && a[0][0]==a[2][2] && a[0][0]!=0)
    {if(a[1][1]<0)console.log('o is the winner');
    else console.log('x is the winner');
    for(i=0;i<=2;i++)
    for(j=0;j<=2;j++)b[i][j].innerHTML='';
    return;
    }
    if(a[1][1]==a[0][2] && a[0][2]==a[2][0] && a[0][2]!=0)
    {if(a[1][1]<0)console.log('o is the winner');
    else console.log('x is the winner');
    for(i=0;i<=2;i++)
    for(j=0;j<=2;j++)b[i][j].innerHTML='';
    return;
    }
   if(a[0].includes(0)==0 &&a[1].includes(0)==0 &&a[2].includes(0)==0)console.log('draw');
return;
   
}
function ev(i,j)
{ b[i][j].addEventListener("click", function() {
    b[i][j].style.color='black';
    b[i][j]=0;
    a[i][j]=player;
    player=-player;
    for(i=0;i<=2;i++)
    for(j=0;j<=2;j++)if(b[i][j])
    {if(player<0)b[i][j].innerHTML="o";
    else b[i][j].innerHTML="x";

    }
    update();
},false);

}
for(i=0;i<=2;i++)
for(j=0;j<=2;j++)ev(i,j);