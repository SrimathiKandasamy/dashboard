function overview(){

    // emp
    employeeList = JSON.parse(localStorage.getItem("data"));
    var count = Object.keys( employeeList).length;
    console.log(count);
    var h3=document.createElement("h3");
    h3.innerHTML= count;
    var child = document.getElementById("employee-count");
    child.after(h3);

    // // proj
    // projectList = JSON.parse(localStorage.getItem("proj"));
    // var count = Object.keys( projectList).length;
    // console.log(count);
    // var h3=document.createElement("h3");
    // h3.innerHTML= count;
    // var child = document.getElementById("project-count");
    // child.after(h3);


    // // dept
    // departmentList = JSON.parse(localStorage.getItem("dept1"));
    // var count = Object.keys(departmentList).length;
    // console.log(count);
    // var h3=document.createElement("h3");
    // h3.innerHTML= count;
    // var child = document.getElementById("department-count");
    // child.after(h3);
}