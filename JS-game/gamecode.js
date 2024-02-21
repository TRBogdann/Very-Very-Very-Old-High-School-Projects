
var selector,aux,clr='white',player,valid=false,clicked=false,i;
player=document.getElementById('prg');
player.textContent=clr;
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
function ev(index) {
    
 document.getElementById(pcs[index].place).addEventListener("click", function() {
     if(clicked==false){
if(clr=='white')
{
if(pcs[index].type=='whitepawn')
{   
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
    if(index+8<64 && pcs[index+8].type=="" )document.getElementById(pcs[index+8].place).style.borderColor="#FF00FF";
    if(pcs[index].place[0]=='B' && index+16<64 && pcs[index+16].type=="" )document.getElementById(pcs[index+16].place).style.borderColor="#FF00FF";
    if(pcs[index].place[1]!='1' && pcs[index+7].color=='black' )document.getElementById(pcs[index+7].place).style.borderColor="#FF00FF";
    if(pcs[index].place[1]!='8' && pcs[index+9].color=='black')document.getElementById(pcs[index+9].place).style.borderColor="#FF00FF";
    selector=index;
    clicked=true;
}
else if(pcs[index].type=='whiteking'){
  
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
    if(index+8<64 && pcs[index+8].color!="white" )document.getElementById(pcs[index+8].place).style.borderColor="#FF00FF";
    if(index-8>-1 && pcs[index-8].color!="white" )document.getElementById(pcs[index-8].place).style.borderColor="#FF00FF";
    if(index<56 && pcs[index+9].color!="white" && pcs[index].place[1]!='8'  )document.getElementById(pcs[index+9].place).style.borderColor="#FF00FF";
    if(index<56 && pcs[index+7].color!="white"  && pcs[index].place[1]!='1'  )document.getElementById(pcs[index+7].place).style.borderColor="#FF00FF";
    if(index>0 && pcs[index-1].color!="white" && pcs[index].place[1]!='1' )document.getElementById(pcs[index-1].place).style.borderColor="#FF00FF";
    if(index<63 && pcs[index+1].color!="white" && pcs[index].place[1]!='8' )document.getElementById(pcs[index+1].place).style.borderColor="#FF00FF";
    if(index>7 && pcs[index-9].color!="white" && pcs[index].place[1]!='8'  )document.getElementById(pcs[index-9].place).style.borderColor="#FF00FF";
    if(index>7 && pcs[index-7].color!="white"  && pcs[index].place[1]!='1'  )document.getElementById(pcs[index-7].place).style.borderColor="#FF00FF";
    selector=index;
    
    clicked=true;

}
else if(pcs[index].type=='whiterook'){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
i=index+8;
while(i<64 && pcs[i].color!='white'){ document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='black')break; 
i=i+8;
}
i=index-8;
while(i>-1 && pcs[i].color!='white')
{
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='black')break; 
i=i-8;
}
i=index-1;
while(pcs[i+1].place[1]!='1' && pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black')break; 
    i--;
}
i=index+1;
while(pcs[i-1].place[1]!='8' && pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black')break; 
    i++;
}
selector=index;
clicked=true;
}
else if(pcs[index].type=="whiteknight")
{    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'8' && index+17<64 && pcs[index+17].color!='white') document.getElementById(pcs[index+17].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'1' && index+15<64 && pcs[index+15].color!='white') document.getElementById(pcs[index+15].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'7' && index+10<64 && pcs[index+10].color!='white') document.getElementById(pcs[index+10].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'2' && index+6<64 && pcs[index+6].color!='white') document.getElementById(pcs[index+6].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'1' && index-17>0 && pcs[index-17].color!='white') document.getElementById(pcs[index-17].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'8' && index-15>0 && pcs[index-15].color!='white') document.getElementById(pcs[index-15].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'2' && index-10>0 && pcs[index-10].color!='white') document.getElementById(pcs[index-10].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'7' && index-6>0 && pcs[index-6].color!='white') document.getElementById(pcs[index-6].place).style.borderColor="#FF00FF";
selector=index;
clicked=true;
}
else if(pcs[index].type=="whitebishop"){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
    i=index+9;
    if(pcs[index].place[1]!='8')while(i<64 &&  pcs[i].color!='white'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='black' || pcs[i].place[1]=='8')break;i=i+9;
    }
    i=index+7;
    if(pcs[index].place[1]!='1')   while(i<64 &&  pcs[i].color!='white'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='black' || pcs[i].place[1]=='1')break;i=i+7;
    }
    i=index-9;
    if(pcs[index].place[1]!='1')while(i>-1 &&  pcs[i].color!='white'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='black' || pcs[i].place[1]=='1')break;i=i-9;
    }
    i=index-7;
    if(pcs[index].place[1]!='8')   while(i>-1 &&  pcs[i].color!='white'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='black' || pcs[i].place[1]=='8')break;i=i-7;
    }
    selector=index;
    clicked=true;

}
else if(pcs[index].type=='whitequeen'){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
i=index+8;
while(i<64 && pcs[i].color!='white'){ document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='black')break; 
i=i+8;
}
i=index-8;
while(i>-1 && pcs[i].color!='white')
{
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='black')break; 
i=i-8;
}
i=index-1;
while(pcs[i+1].place[1]!='1' && pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black')break; 
    i--;
}
i=index+1;
while(pcs[i-1].place[1]!='8' && pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black')break; 
    i++;
}
i=index+9;
if(pcs[index].place[1]!='8')while(i<64 &&  pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black' || pcs[i].place[1]=='8')break;i=i+9;
}
i=index+7;
if(pcs[index].place[1]!='1')   while(i<64 &&  pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black' || pcs[i].place[1]=='1')break;i=i+7;
}
i=index-9;
if(pcs[index].place[1]!='1')while(i>-1 &&  pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black' || pcs[i].place[1]=='1')break;i=i-9;
}
i=index-7;
if(pcs[index].place[1]!='8')   while(i>-1 &&  pcs[i].color!='white'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='black' || pcs[i].place[1]=='8')break;i=i-7;
}
selector=index;
clicked=true;
}

}
else if(clr=='black')
{
if(pcs[index].type=='blackpawn')
{   
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
    if(index-8>-1 && pcs[index-8].type=="" )document.getElementById(pcs[index-8].place).style.borderColor="#FF00FF";
    if(pcs[index].place[0]=='G' && index-16>-1 && pcs[index-16].type=="" )document.getElementById(pcs[index-16].place).style.borderColor="#FF00FF";
    if(pcs[index].place[1]!='8' && pcs[index-7].color=='white')document.getElementById(pcs[index-7].place).style.borderColor="#FF00FF";
    if(pcs[index].place[1]!='1' && pcs[index-9].color=='white')document.getElementById(pcs[index-9].place).style.borderColor="#FF00FF";
    selector=index;
    clicked=true;
}
if(pcs[index].type=='blackking'){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
    if(index+8<64 && pcs[index+8].color!='black' )document.getElementById(pcs[index+8].place).style.borderColor="#FF00FF";
    if(index-8>-1 && pcs[index-8].color!='black' )document.getElementById(pcs[index-8].place).style.borderColor="#FF00FF";
    if(index<56 && pcs[index+9].color!='black' && pcs[index].place[1]!='8'  )document.getElementById(pcs[index+9].place).style.borderColor="#FF00FF";
    if(index<56 && pcs[index+7].color!='black'  && pcs[index].place[1]!='1'  )document.getElementById(pcs[index+7].place).style.borderColor="#FF00FF";
    if(index>0 && pcs[index-1].color!='black' && pcs[index].place[1]!='1' )document.getElementById(pcs[index-1].place).style.borderColor="#FF00FF";
    if(index<63 && pcs[index+1].color!='black' && pcs[index].place[1]!='8' )document.getElementById(pcs[index+1].place).style.borderColor="#FF00FF";
    if(index>7 && pcs[index-9].color!='black' && pcs[index].place[1]!='8'  )document.getElementById(pcs[index-9].place).style.borderColor="#FF00FF";
    if(index>7 && pcs[index-7].color!='black'  && pcs[index].place[1]!='1'  )document.getElementById(pcs[index-7].place).style.borderColor="#FF00FF";
    selector=index;
    
    clicked=true;


}
else if(pcs[index].type=='blackrook'){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
i=index+8;
while(i<64 && pcs[i].color!='black'){ document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='white')break; 
i=i+8;
}
i=index-8;
while(i>-1 && pcs[i].color!='black')
{
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='white')break; 
i=i-8;
}
i=index-1;
while(pcs[i+1].place[1]!='1' && pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white')break; 
    i--;
}
i=index+1;
while(pcs[i-1].place[1]!='8' && pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white')break; 
    i++;
}
selector=index;
clicked=true;
}
else if(pcs[index].type=="blackknight")
{ document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'8' && index+17<64 && pcs[index+17].color!='black') document.getElementById(pcs[index+17].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'1' && index+15<64 && pcs[index+15].color!='black') document.getElementById(pcs[index+15].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'7' && index+10<64 && pcs[index+10].color!='black') document.getElementById(pcs[index+10].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'2' && index+6<64 && pcs[index+6].color!='black') document.getElementById(pcs[index+6].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'1' && index-17>0 && pcs[index-17].color!='black') document.getElementById(pcs[index-17].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'8' && index-15>0 && pcs[index-15].color!='black') document.getElementById(pcs[index-15].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]>'2' && index-10>0 && pcs[index-10].color!='black') document.getElementById(pcs[index-10].place).style.borderColor="#FF00FF";
if(pcs[index].place[1]<'7' && index-6>0 && pcs[index-6].color!='black') document.getElementById(pcs[index-6].place).style.borderColor="#FF00FF";
selector=index;
clicked=true;
}
else if(pcs[index].type=="blackbishop"){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
    i=index+9;
    if(pcs[index].place[1]!='8')while(i<64 &&  pcs[i].color!='black'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='white' || pcs[i].place[1]=='8')break;i=i+9;
    }
    i=index+7;
    if(pcs[index].place[1]!='1')   while(i<64 &&  pcs[i].color!='black'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='white' || pcs[i].place[1]=='1')break;i=i+7;
    }
    i=index-9;
    if(pcs[index].place[1]!='1')while(i>-1 &&  pcs[i].color!='black'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='white' || pcs[i].place[1]=='1')break;i=i-9;
    }
    i=index-7;
    if(pcs[index].place[1]!='8')   while(i>-1 &&  pcs[i].color!='black'){
        document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
        if(pcs[i].color=='white' || pcs[i].place[1]=='8')break;i=i-7;
    }
    selector=index;
    clicked=true;

}
else if(pcs[index].type=='blackqueen'){
    document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
i=index+8;
while(i<64 && pcs[i].color!='black'){ document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='white')break; 
i=i+8;
}
i=index-8;
while(i>-1 && pcs[i].color!='black')
{
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
if(pcs[i].color=='white')break; 
i=i-8;
}
i=index-1;
while(pcs[i+1].place[1]!='1' && pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white')break; 
    i--;
}
i=index+1;
while(pcs[i-1].place[1]!='8' && pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white')break; 
    i++;
}
document.getElementById(pcs[index].place).style.borderColor="#FF00FF";
i=index+9;
if(pcs[index].place[1]!='8')while(i<64 &&  pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white' || pcs[i].place[1]=='8')break;i=i+9;
}
i=index+7;
if(pcs[index].place[1]!='1')   while(i<64 &&  pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white' || pcs[i].place[1]=='1')break;i=i+7;
}
i=index-9;
if(pcs[index].place[1]!='1')while(i>-1 &&  pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white' || pcs[i].place[1]=='1')break;i=i-9;
}
i=index-7;
if(pcs[index].place[1]!='8')   while(i>-1 &&  pcs[i].color!='black'){
    document.getElementById(pcs[i].place).style.borderColor="#FF00FF";
    if(pcs[i].color=='white' || pcs[i].place[1]=='8')break;i=i-7;
}
selector=index;
clicked=true;
}

}

     }









     else if(clicked==true)
     {
         if(clr=='white'){
if(pcs[selector].type=='whitepawn'){
if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
    document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
    document.getElementById(pcs[selector].place).style.backgroundImage="";
    pcs[index].color='white'; pcs[selector].color='';
    pcs[index].type='whitepawn'; pcs[selector].type='';
    clr='black';
    player.textContent=clr;
clicked=false;
for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
}





         }
         else if(pcs[selector].type=='whiteking'){
            if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
            else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                document.getElementById(pcs[selector].place).style.backgroundImage="";
                pcs[index].color='white'; pcs[selector].color='';
                pcs[index].type='whiteking'; pcs[selector].type='';
                clr='black';
                player.textContent=clr;
            clicked=false;
            for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
            }
        
        
        
        }
      else  if(pcs[selector].type=='whiterook'){
            if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
            else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                document.getElementById(pcs[selector].place).style.backgroundImage="";
                pcs[index].color='white'; pcs[selector].color='';
                pcs[index].type='whiterook'; pcs[selector].type='';
                clr='black';
                player.textContent=clr;
            clicked=false;
            for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
            }
            
            
            
            
            
                     }
                     else  if(pcs[selector].type=='whiteknight'){
                        if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                        else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                            document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                            document.getElementById(pcs[selector].place).style.backgroundImage="";
                            pcs[index].color='white'; pcs[selector].color='';
                            pcs[index].type='whiteknight'; pcs[selector].type='';
                            clr='black';
                            player.textContent=clr;
                        clicked=false;
                        for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                        }
                        
                        
                        
                        
                        
                                 }
                                 else  if(pcs[selector].type=='whitebishop'){
                                    if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                                    else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                                        document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                                        document.getElementById(pcs[selector].place).style.backgroundImage="";
                                        pcs[index].color='white'; pcs[selector].color='';
                                        pcs[index].type='whitebishop'; pcs[selector].type='';
                                        clr='black';
                                        player.textContent=clr;
                                    clicked=false;
                                    for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                                    }
                                    
                                    
                                    
                                    
                                    
                                             }
                                             else  if(pcs[selector].type=='whitequeen'){
                                                if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                                                else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                                                    document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                                                    document.getElementById(pcs[selector].place).style.backgroundImage="";
                                                    pcs[index].color='white'; pcs[selector].color='';
                                                    pcs[index].type='whitequeen'; pcs[selector].type='';
                                                    clr='black';
                                                    player.textContent=clr;
                                                clicked=false;
                                                for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                                                }
                                                
                                                
                                                
                                                
                                                
                                                         }



        }










        if(clr=='black'){
            if(pcs[selector].type=='blackpawn'){
            if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
            else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                document.getElementById(pcs[selector].place).style.backgroundImage="";
                pcs[index].color='black'; pcs[selector].color='';
                pcs[index].type='blackpawn'; pcs[selector].type='';
                clr='white';
                player.textContent=clr;
            clicked=false;
            for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
            }
            
            
            
            
                     }
                     else if(pcs[selector].type=='blackking'){
                        if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                        else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                            document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                            document.getElementById(pcs[selector].place).style.backgroundImage="";
                            pcs[index].color='black'; pcs[selector].color='';
                            pcs[index].type='blackking'; pcs[selector].type='';
                            clr='white';
                            player.textContent=clr;
                        clicked=false;
                        for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                        }
                    
                    
                    
                    } else  if(pcs[selector].type=='blackrook'){
                        if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                        else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                            document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                            document.getElementById(pcs[selector].place).style.backgroundImage="";
                            pcs[index].color='black'; pcs[selector].color='';
                            pcs[index].type='blackrook'; pcs[selector].type='';
                            clr='white';
                            player.textContent=clr;
                        clicked=false;
                        for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                        }
                        
                        
                        
                        
                        
                                 }
                                 else  if(pcs[selector].type=='blackknight'){
                                    if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                                    else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                                        document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                                        document.getElementById(pcs[selector].place).style.backgroundImage="";
                                        pcs[index].color='black'; pcs[selector].color='';
                                        pcs[index].type='blackknight'; pcs[selector].type='';
                                        clr='white';
                                        player.textContent=clr;
                                    clicked=false;
                                    for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                                    }
                                    
                                    
                                    
                                    
                                    
                                             }
                                             else  if(pcs[selector].type=='blackbishop'){
                                                if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                                                else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                                                    document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                                                    document.getElementById(pcs[selector].place).style.backgroundImage="";
                                                    pcs[index].color='black'; pcs[selector].color='';
                                                    pcs[index].type='blackbishop'; pcs[selector].type='';
                                                    clr='white';
                                                    player.textContent=clr;
                                                clicked=false;
                                                for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                                                }
                                                
                                                
                                                
                                                
                                                
                                                         }
                                                         else  if(pcs[selector].type=='blackqueen'){
                                                            if(index==selector){clicked=false;for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}}
                                                            else if(document.getElementById(pcs[index].place).style.borderColor==document.getElementById(pcs[selector].place).style.borderColor){
                                                                document.getElementById(pcs[index].place).style.backgroundImage=document.getElementById(pcs[selector].place).style.backgroundImage;
                                                                document.getElementById(pcs[selector].place).style.backgroundImage="";
                                                                pcs[index].color='black'; pcs[selector].color='';
                                                                pcs[index].type='blackqueen'; pcs[selector].type='';
                                                                clr='white';
                                                                player.textContent=clr;
                                                            clicked=false;
                                                            for(i=0;i<=63;i++){document.getElementById(pcs[i].place).style.borderColor='black';}
                                                            }
                                                            
                                                            
                                                            
                                                            
                                                            
                                                                     }
            
            
            
                    }
            





     }
},false);
    
}
var whitepawns=['B1','B2','B3','B4','B5','B6','B7','B8'];
var whiterooks=['A1','A8'];
var whitebishops=['A3','A6'];
var whiteking='A5';
var whitequeen='A4';
var whiteknights=['A2','A7'];
var blackpawns=['G1','G2','G3','G4','G5','G6','G7','G8'];
var blackrooks=['H1','H8'];
var blackbishops=['H3','H6'];
var blackking='H5';
var blackqueen='H4';
var blackknights=['H2','H7'];
var k=1;
var l1='A', l2='1',str1='';
var pcs=[];
var localComponent,defaultType,bgp,arrayClick=[];
if(k==1){for(i=0;i<=63;i++)
{
str1='';defaultType='';
str1+=l1; str1+=l2;
localComponent=document.getElementById(str1);
if(whitepawns.includes(str1))defaultType='whitepawn';
if(whiterooks.includes(str1))defaultType='whiterook';
if(whitebishops.includes(str1))defaultType='whitebishop';
if(whiteknights.includes(str1))defaultType='whiteknight';
if(whitequeen==str1)defaultType='whitequeen';
if(whiteking==str1)defaultType='whiteking';
if(blackrooks.includes(str1))defaultType='blackrook';
if(blackbishops.includes(str1))defaultType='blackbishop';
if(blackknights.includes(str1))defaultType='blackknight';
if(blackqueen==str1)defaultType='blackqueen';
if(blackking==str1)defaultType='blackking';
if(blackpawns.includes(str1))defaultType='blackpawn';
pcs.push({place:str1,type:defaultType,component:localComponent,is_clicked:false,color:null});
if(l2<'8')l2++;
else{
   l1= nextChar(l1);
    l2='1';
}

}
k++;
}
for(i=0;i<=63;i++)
{
if(pcs[i].type=='whitepawn'){
    pcs[i].color='white';
bgp=document.getElementById(pcs[i].place);
bgp.style.backgroundImage= "url('whitePawn.png')";
}
if(pcs[i].type=='whiterook'){
    pcs[i].color='white';
bgp=document.getElementById(pcs[i].place);
bgp.style.backgroundImage= "url('whiteRook.svg.png')";
}
if(pcs[i].type=='whitebishop'){
    pcs[i].color='white';
bgp=document.getElementById(pcs[i].place);
bgp.style.backgroundImage= "url('whiteBishop.png')";
}
if(pcs[i].type=='whiteknight'){
    pcs[i].color='white';
bgp=document.getElementById(pcs[i].place);
bgp.style.backgroundImage= "url('whiteKnight.png')";
}
if(pcs[i].type=='whiteking'){
    pcs[i].color='white';
bgp=document.getElementById(pcs[i].place);
bgp.style.backgroundImage= "url('whiteKing.png')";
}
if(pcs[i].type=='whitequeen'){
    pcs[i].color='white';
bgp=document.getElementById(pcs[i].place);
bgp.style.backgroundImage= "url('whiteQueen.png')";
}
if(pcs[i].type=='blackpawn'){
    pcs[i].color='black';
    bgp=document.getElementById(pcs[i].place);
    bgp.style.backgroundImage= "url('blackPawn.png')";
    }
    if(pcs[i].type=='blackrook'){
        pcs[i].color='black';
    bgp=document.getElementById(pcs[i].place);
    bgp.style.backgroundImage= "url('blackRook.png')";
    }
    if(pcs[i].type=='blackbishop'){
        pcs[i].color='black';
    bgp=document.getElementById(pcs[i].place);
    bgp.style.backgroundImage= "url('blackBishop.png')";
    }
    if(pcs[i].type=='blackknight'){
        pcs[i].color='black';
    bgp=document.getElementById(pcs[i].place);
    bgp.style.backgroundImage= "url('blackKnight.png')";
    }
    if(pcs[i].type=='blackking'){
        pcs[i].color='black';
    bgp=document.getElementById(pcs[i].place);
    bgp.style.backgroundImage= "url('blackKing.png')";
    }
    if(pcs[i].type=='blackqueen'){
        pcs[i].color='black';
    bgp=document.getElementById(pcs[i].place);
    bgp.style.backgroundImage= "url('blackQueen.png')";
    }
}
for(i=0;i<=63;i++){
    ev(i)
}
