let input = document.getElementById("val");
let listItem = document.getElementById("listItem");
let updateBtn = document.getElementById("updateBtn");
let addBtn = document.getElementById("addBtn");
let save ;
function toDo() {

  if (input.value === "") {

    alert(" Input Not Filled ")
  }
  else {
    let licreate = document.createElement("li");
    let para = document.createElement("span");
    para.setAttribute("id", "text")
    let createText = document.createTextNode(input.value);
    licreate.appendChild(para);
    para.appendChild(createText);
    listItem.appendChild(licreate);
    console.log(licreate)

    let btnParent = document.createElement("div");
    licreate.appendChild(btnParent);
    btnParent.setAttribute("class", "btnParent1");

    let deleteBtn = document.createElement("button");
    let buttonText = document.createTextNode("DELETE");
    deleteBtn.appendChild(buttonText);
    btnParent.appendChild(deleteBtn);
    deleteBtn.setAttribute("onclick", "liDelete(this)");
    deleteBtn.setAttribute("class", "delete-btn");

    let editBtn = document.createElement("button");
    let buttonText2 = document.createTextNode("EDIT");
    editBtn.appendChild(buttonText2);
    btnParent.appendChild(editBtn);
    editBtn.setAttribute("onclick", "liEdit(this)");
    input.value = "";


  }
}
function liDelete(e) {

  if (  confirm ("Are You Sure delete Task")){
    e.parentNode.parentNode.innerHTML = "";
  console.log(e.parentNode.parentNode)
}
}
function liEdit(f) {
  addBtn.style.display = "none";
  console.log(addBtn);
  updateBtn.style.display = "inline";
input.value =  f.parentNode.parentNode.firstChild.firstChild.nodeValue;
save = f;
console.log(f.parentNode.parentNode.firstChild.firstChild)
}
function updateBtns() {
  // let newValue = document.getElementById("text");
//  input.value = save ;
save.parentNode.parentNode.firstChild.firstChild.nodeValue  = input.value  ;
  console.log(save.parentNode.parentNode.firstChild.firstChild)
  // input.value = "";
  // console.log(newValue)
  updateBtn.style.display = "none";
  addBtn.style.display = "inline";
}



function deleteAll() {
  if(confirm("Are You Sure Delete All"))
  listItem.innerText = "";
}