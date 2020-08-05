const name=document.getElementById("name");
const dob=document.getElementById("dob");
const addr=document.getElementById("addr");
const exp=document.getElementById("exp"); 
const phone=document.getElementById("phone");
const dept=document.getElementById("dept");
const proj=document.getElementById("proj");                                                           
const table=document.getElementById("response"); 
const addButton=document.getElementById("sub"); 
const editbutton=document.querySelector("#edit");
const form=document.querySelector("#form");

 
let result=[]; 
	result = JSON.parse(localStorage.getItem("data"));
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
	if(localStorage.getItem("data") != undefined && localStorage.getItem("data") !=""){
		result = JSON.parse(localStorage.getItem("data"));
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
	dob.value="";
	exp.value=""; 
	addr.value="";
	phone.value=""; 
	dept.value=""; 
	proj.value="";
	form.setAttribute("value",0);
	form.style.display="none";
});
function add(){ 
	var objname=name.value; 
	var objdob=dob.value;
	var objexp=exp.value;  
	var objaddr=addr.value;  
	var objphone=phone.value; 
	var objdept=dept.value;
	var objproj=proj.value; 

	let obj;
	if(objname!=""&& objdob!=""&& objexp!=""&& objaddr!=""&& objphone!=""){
	    obj={
			id:i, 
	 		name:objname,
			dob:objdob,
			exp:objexp,
			addr:objaddr, 
			phone:objphone, 
			dept:objdept,
			proj:objproj
		} 
		result.push(obj); 
		console.log(i);
		name.value=""; 
		dob.value="";
		exp.value="";  
		addr.value="";  
		phone.value=""; 
		dept.value="";
		proj.value=""; 
	}
	else{ 
		console.log("no data"); 
	}            	
	LoadData(result);
	console.log(result); 
	saveLocal(result);
	form.style.display="none";
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
	let objdob = dob.value;
	let objexp = exp.value;
	let objaddr = addr.value;
	let objphone = phone.value;
	let objdept = dept.value;
	let objproj = proj.value; 
	var obj = {
		id:id,
		name:objname,
		dob:objdob,
		exp:objexp,
		addr:objaddr,
		phone:objphone,
		dept:objdept,
		proj:objproj

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
	}
	result=temp;
	LoadData(temp);
	editbutton.classList.add("hide");
	addButton.classList.remove("hide");
	saveLocal(result);
	form.style.display="none";		
};

const LoadData=(values)=>{ 
	table.innerHTML=""; 
	var response=""; 
	for(value of values){ 
		response=response+ `<tr><td>${value.name}</td> 
		<td>${value.dob}</td>
		<td>${value.exp}</td> 
		<td>${value.addr}</td>
		<td>${value.phone}</td>
		<td>${value.dept}</td>
		<td>${value.proj}</td>
		<td><button Onclick=myfunction1();edit(${value.id})>Edit</button>
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
			dob.value = value.dob;
			exp.value = value.exp;
			addr.value= value.addr;
			phone.value = value.phone;
			dept.value = value.dept;
			proj.value = value.proj;
			form.setAttribute("value",value.id);
			editbutton.classList.remove("hide");
			addButton.classList.add("hide");
		}
	}
}


function saveLocal(json){
	localStorage.setItem("data", JSON.stringify(json));
}
loadFromLocal();
LoadData(result);

function loadDept(){
	result1 = JSON.parse(localStorage.getItem("dept1"));
	var ele = document.getElementById('dept');
	ele.options.length = 0;
	ele.innerHTML = ele.innerHTML +
		'<option value="">-- Select --</option>'; 
	for (var i = 0; i < result1.length; i++) {
		ele.innerHTML = ele.innerHTML +
			'<option value="' + result1[i]['name'] + '">' + result1[i]['name'] + '</option>';
	}
}