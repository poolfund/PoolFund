console.log("HERE")

function CheckM(){
  console.log("HERE1")
  // if investor is checked, uncheck it
	if(document.getElementById("i").checked){
    document.getElementById("i").checked = false;
  }
  // investor required is false
  document.getElementById("i").required = false;
  // set manager required to true if it isn't
  if(document.getElementById("m").required == false) {
    document.getElementById("m").required = true;
  }
}

function CheckI(){
  console.log("HERE2")
  // if manager is checked, uncheck it
  if(document.getElementById("m").checked){
    document.getElementById("m").checked = false;
  }
  // manager required is false
  document.getElementById("m").required = false;
  // set manager required to true if it isn't
  if(document.getElementById("i").required == false) {
    document.getElementById("i").required = true;
  }
}
