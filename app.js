
// Clearing Input Fields
function Clear(){
	document.getElementById("Myresult").value = "";
}



// Calculation Code
function calculator(newValue){
	document.getElementById("Myresult").value += newValue;
}


// Answer Code
function Answer(){
	var w = document.getElementById("Myresult").value;
	var p = eval(w);
	document.getElementById("Myresult").value = p;
}