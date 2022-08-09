var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","size");
button.innerHTML="Search";
button.addEventListener("click",foo);

var active=document.createElement("div");
active.setAttribute("id","active");

var recover=document.createElement("div");
recover.setAttribute("id","recover");

var death=document.createElement("div");
death.setAttribute("id","death");

div.append(input,button,active,recover,death);

document.body.append(div);

async function foo(){

    var res=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${res}`;
    var result= await fetch(url);
    var result1=await (result).json();
    var index=result1.length-1;
    active.innerHTML=`Total Active case: ${result1[index].Active}`;
    recover.innerHTML=`Recovered case: ${result1[index].Recovered}`;
    death.innerHTML=`Death: ${result1[index].Deaths}`;
   
   }