const paracount = document.getElementById('count');
const oddeven = document.getElementById('demo');
let c = 0;

function incr()
{
	++c;
	if(c>20){
		alert("Maximum no size is 20");
	}	
	else{

	if(c%2==0){
		oddeven.innerHTML = "Even!";
		paracount.textContent=c;
		}
	else{
		oddeven.innerHTML = "Odd!";
		paracount.textContent=c;
	}
    }
}

function decr()
{
    
	--c;
	if(c>=0){
		if(c%2==0){
			oddeven.innerHTML = "Even!";
			paracount.textContent=c;
			}
		else{
			oddeven.innerHTML = "Odd!";
			paracount.textContent=c;
		}
		
	}	
	else{

		alert("Minimum no size is 0");
    }		

}

function reset ()
{
    c = 0;
    paracount.textContent=c
	oddeven.innerHTML = "0";

}

