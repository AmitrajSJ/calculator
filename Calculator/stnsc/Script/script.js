let flag=0;
function buttonclick(btnid){
	if(flag==0){
	document.getElementById("textmain").value = ""; 
	flag=1;}
	if(btnid=="AC")
	{
		document.getElementById("textmain").value = "0";
		document.getElementById("textsub").value = "";
		document.getElementById("textmain").style.fontSize="45px";
		document.getElementById("textsub").style.fontSize="45px";
		flag=0;
	}
	else if(btnid=="=")
		{   let eqn = 0;
			if(eval(document.getElementById("textmain").value)== undefined)
			{document.getElementById("textmain").value= "0";}
			else{
				eqn=document.getElementById("textmain").value;
			document.getElementById("textmain").value= eval(document.getElementById("textmain").value);
			document.getElementById("textsub").value = eqn;}}
	else if(btnid=="%"){
			let num;
			num=document.getElementById("textmain").value
			document.getElementById("textmain").value = num/100;
			}
	else if(btnid=="pom"){
		let signs=document.getElementById("textmain").value;
		if(document.getElementById("textmain").value>0){
			document.getElementById("textmain").value=(0-signs)
		}
		else{document.getElementById("textmain").value= (-1*signs)}
		
	}
	else{
		if(document.getElementById("textmain").value.length >8)
		{	if(document.getElementById("textmain").value.length >11){
			document.getElementById("textmain").style.fontSize="20px";
			document.getElementById("textsub").style.fontSize="20px";
			document.getElementById("textmain").value += btnid;
		}
		else{
			document.getElementById("textmain").style.fontSize="30px";
			document.getElementById("textsub").style.fontSize="30px";
			document.getElementById("textmain").value += btnid;
		}
		}
		else
		{
		document.getElementById("textmain").value += btnid;
		}
	}
}
