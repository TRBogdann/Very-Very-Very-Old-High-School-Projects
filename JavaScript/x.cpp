#include <iostream>
#include <cstring>
using namespace std;
int main()
{char a[51],b[51],r[51];
while(true){
cout<<"jucator1:";cin.getline(a,51);
cout<<"jucator2:";cin.getline(b,51);
if(strcmp(a,"foarfeca")==0 && strcmp(b,"hartie")==0)cout<<a<<" bate "<<b;
if(strcmp(b,"foarfeca")==0 && strcmp(a,"hartie")==0)cout<<b<<" bate "<<a;
if(strcmp(a,"foarfeca")==0 && strcmp(b,"piatra")==0)cout<<b<<" bate "<<a;
if(strcmp(b,"foarfeca")==0 && strcmp(a,"piatra")==0)cout<<a<<" bate "<<b;
if(strcmp(a,"hartie")==0 && strcmp(b,"piatra")==0)cout<<a<<" bate "<<b;
if(strcmp(b,"hartie")==0 && strcmp(a,"piatra")==0)cout<<b<<" bate "<<a;
cout<<endl<<"Doriti sa continuati ?";
cin.getline(r,51);
if(strcmp(r,"nu")==0)break;
}

    return 0;
}