const x=document.querySelectorAll('[inputdata]');
const y=document.querySelector('.exp');
const z=document.querySelector('#del');
const a=document.querySelector('#alt');
const b=document.querySelector('.result');
const c=document.querySelector('#eq');
let arrayValue=[];
let value=true;
let operation="+-*÷";
let stack="";
let str="";
const decimalCount = num => {
  const numStr = String(num);
  if (numStr.includes('.')) {
     return numStr.split('.')[1].length;
  };
  return 0;
}
function isValid()
{
if(stack.length<1)return 0;
if(stack[stack.length-1]=='.' || operation.indexOf(stack[stack.length-1])!=-1)return -1;
 return 1;
};
function multiplier()
{    i=str.indexOf('*')-1;j=str.indexOf('*')+1;
while(i>=0 && operation.indexOf(str[i])==-1)i--;
if(i==0 && str[i]=='-')i--;
while(j<str.length && operation.indexOf(str[j])==-1)j++;
str1=str.slice(i+1,str.indexOf('*'));
str2=str.slice(str.indexOf('*')+1,j);
n1=parseFloat(str1);
n2=parseFloat(str2);
n=n1*n2;if(decimalCount(n)>6)n=n.toFixed(6);
str=str.slice(0,i+1)+n+str.slice(j,str.length);
calculate();
}
function divide ()
{    i=str.indexOf('÷')-1;j=str.indexOf('÷')+1;
while(i>=0 && operation.indexOf(str[i])==-1)i--;
if(i==0 && str[i]=='-')i--;
while(j<str.length && operation.indexOf(str[j])==-1)j++;
str1=str.slice(i+1,str.indexOf('÷'));
str2=str.slice(str.indexOf('÷')+1,j);
n1=parseFloat(str1);
n2=parseFloat(str2);
if(n2==0){error=1;return;}
n=n1/n2;if(decimalCount(n)>6)n=n.toFixed(6);
str=str.slice(0,i+1)+n+str.slice(j,str.length);
calculate();

}
function add()
{i=str.indexOf('+')-1;j=str.indexOf('+')+1;
while(i>=0 && operation.indexOf(str[i])==-1)i--;
if(i==0 && str[i]=='-')i--;
while(j<str.length && operation.indexOf(str[j])==-1)j++;
str1=str.slice(i+1,str.indexOf('+'));
str2=str.slice(str.indexOf('+')+1,j);
n1=parseFloat(str1);
n2=parseFloat(str2);
n=n1+n2;if(decimalCount(n)>6)n=n.toFixed(6);
str=str.slice(0,i+1)+n+str.slice(j,str.length);
calculate();
}
function decrease()
{i=m-1;j=m+1;
while(i>=0 && operation.indexOf(str[i])==-1)i--;
if(i==0 && str[i]=='-')i--;
while(j<str.length && operation.indexOf(str[j])==-1)j++;
str1=str.slice(i+1,m);
str2=str.slice(m+1,j);
n1=parseFloat(str1);
n2=parseFloat(str2);
n=n1-n2;if(decimalCount(n)>6)n=n.toFixed(6);
str=str.slice(0,i+1)+n+str.slice(j,str.length);
calculate();

}
function calculate()
{n1=0;str1='';error=0;
n2=0;str2='';
m=str.substring(1).indexOf('-');
if(m!=-1)m++;
if(str.indexOf('*')!=-1){
if(str.indexOf('÷')==-1)multiplier();
else if(str.indexOf('÷')>str.indexOf('*'))multiplier();
}
if(str.indexOf('÷')!=-1){divide();if(error)return 'syntax error';}
if(str.indexOf('+')!=-1){
    if(m==-1)add();
    else if(m>str.indexOf('+'))add();
    }
if(m!=-1)decrease()
return str;

};
function update()
{if(isValid()==-1)b.innerHTML='';
 if(isValid()==0)b.innerHTML='0';
 if(isValid()==1)
 { str=stack;
   b.innerHTML=calculate();
 }
};
 x.forEach((button) => {
    button.addEventListener('click', () => {
      if(button.innerHTML=='.' && (value==false || stack[stack.length-1]<'0' || stack[stack.length-1]>'9'  ))return;
      if(button.innerHTML=='.' && stack.length<1)stack=stack+'0';
      if(button.innerHTML=='.' && value==true  )value=false;
      if(operation.indexOf(button.innerHTML)!=-1 && operation.indexOf(stack[stack.length-1])!=-1)return;
      if(operation.indexOf(button.innerHTML)!=-1 && stack[stack.length-1]=='.')return;
     if(button.innerHTML!="-")if(operation.indexOf(button.innerHTML)!=-1 && stack.length==0)return;
      if(operation.indexOf(button.innerHTML)>=0)value=true;
      arrayValue.push(value);
      stack=stack+button.innerHTML;
      y.innerHTML=stack;
      update()
    });
  });
 z.addEventListener('click', function () {
stack=stack.slice(0,-1);
 arrayValue.pop();
 value=arrayValue[arrayValue.length-1];
 y.innerHTML=stack;
 update();
});
a.addEventListener('click', function () {
   arrayValue=[];
  value=true;
   operation="+-*÷";
  stack="";
  y.innerHTML=0;
  update();
  });
  c.addEventListener('click', function () {
  stack=b.innerHTML;
  y.innerHTML=stack;
  b.innerHTML='';
  if(y.innerHTML==69)window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   });
 