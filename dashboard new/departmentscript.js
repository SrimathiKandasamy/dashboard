const name=document.getElementById("name");
const description=document.getElementById("description");                                                           
const table=document.getElementById("response"); 
const addButton=document.getElementById("sub"); 
const editbutton=document.querySelector("#edit");
const form=document.querySelector("#form");

 
let result=[]; 
	result = JSON.parse(localStorage.getItem("dept1"));
	var i;
	console.log(result);
	if(result == null){
		i = 1;
	}
	else{
		arr = result.length;
		for(var j = 0; j < arr; j++) {
			var obj = result[j];
			var i = obj.id;
			i++;
		}
	}

function loadFromLocal(){
	if(localStorage.getItem("dept1") != undefined && localStorage.getItem("dept1") !=""){
		result = JSON.parse(localStorage.getItem("dept1"));
	} else {
		result = [];
	}
}
form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let id = form.getAttribute("value");
	console.log("ID:"+ id)
	if(id == 0){
		console.log("add");
		add();
		i++;
	} else {
		console.log("edit");
		editValue(id);
	}
	name.value=""; 
	description.value="";
	form.setAttribute("value",0);
	form.style.display="none";
});
function add(){ 
	var objname=name.value; 
	var objdescription=description.value; 

	let obj;
	if(objname !="" && objdescription != ""){
	    obj={
			id:i, 
	 		name:objname,
			description:objdescription
		} 
		result.push(obj); 
		console.log(i);
		name.value=""; 
		description.value=""; 
	}
	else{ 
		console.log("no data"); 
	}            	
	LoadData(result);
	console.log(result); 
	saveLocal(result);
}

function myfunction1(){
	document.getElementById("form").reset();
	form.style.display="block";
}
function myfunction3(){
	form.style.display="block";
}

function editValue(id){
	let objname = name.value;
	let objdescription = description.value; 
	var obj = {
		id:id,
		name:objname,
		description:objdescription

	}
	let temp = [];
	for (value of result){
		if (value.id == id)
		{
			temp.push(obj);
		}
		else {
			temp.push(value);
		}
		form.style.display="none";
	}
	result=temp;
	LoadData(temp);
	editbutton.classList.add("hide");
	addButton.classList.remove("hide");
	saveLocal(result);		
};

const LoadData=(values)=>{ 
	table.innerHTML=""; 
	var response=""; 
	for(value of values){ 
		response=response+ `<tr><td>${value.name}</td> 
		<td>${value.description}</td>
		<td><button Onclick=myfunction3();edit(${value.id})>Edit</button>
		<button Onclick=remove(${value.id})>Delete</button></td></tr>`; 
	} 
	table.innerHTML=response; 
};

function remove(id){
	console.log(id);
	var arr=[];
	for (value of result){
		if (value.id != id){
			arr.push(value);
		}
	}
	result= arr;
	LoadData(arr);
}

function edit(id){
	console.log(id);

	for (value of result){
		if (value.id == id){
			name.value = value.name;
			description.value = value.description;
			form.setAttribute("value",value.id);
			editbutton.classList.remove("hide");
			addButton.classList.add("hide");
		}
	}
}


function saveLocal(json){
	localStorage.setItem("dept1", JSON.stringify(json));
}
loadFromLocal();
LoadData(result);