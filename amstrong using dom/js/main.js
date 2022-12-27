var f=document.createElement('div');
f.setAttribute("display","flex");
f.setAttribute("class","flex");
f.setAttribute('style',"background-color:aqua");
document.body.appendChild(f);

var h1=document.createElement("h1");
f.appendChild(h1);
h1.setAttribute("style","color:purple");
h1.setAttribute("style","border:20px solid black");
h1.innerHTML="Check whether the number is armstrong or not :";

var i1=document.createElement("input");
f.appendChild(i1);
i1.setAttribute("id","num");
i1.style.border="2px solid black";
i1.style.backgroundColor="pink";
i1.setAttribute("placeholder","enter number :");

var b1=document.createElement("button")
f.appendChild(b1);
b1.innerHTML="check";
b1.setAttribute("type","button");
b1.style.backgroundColor="pink"
b1.style.border="2px solid purple";
b1.style.margin="290px 290px";
document.write("<br>")
b1.onclick=function()
{
var store=document.createElement("div");
f.appendChild(store);
f.setAttribute("class","flex");
var pt=document.createElement("p");
store.appendChild(pt);
pt.setAttribute("class","p");
var number=document.getElementById("num").value;
var num=number;
var a=0,n=number,b=0;
while(n>0)
{
	temp=n%10;
	b+=1
	n=(n-temp)/10;
}
while(number>0)
{
	rem=number%10;
	a+=rem**b;
	number=(number-rem)/10;
	if(number==0)
	{
		if(num==a)
		{
			pt.innerHTML=num+" is a amstrong";
		}
		else
		{
			pt.innerHTML=num+" is not a amstrong";
		}
	}
}
}