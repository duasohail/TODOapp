
var list=document.getElementById("ls");

function addTodo(){
    var item=document.getElementById("todo_item");
    li=document.createElement('li');
    textLi=document.createTextNode(item.value);
    li.setAttribute('class','text-dark')
    li.appendChild(textLi);
//list items end here

//delete item 

    del=document.createElement('button');
    deltext=document.createTextNode('DELETE');
    del.setAttribute('id','dl');
    del.setAttribute('class','btn btn-sm');
    del.setAttribute("onclick","del_item(this)")
    del.appendChild(deltext);
    li.appendChild(del);
//edit button

    ed=document.createElement('button');
    edtxt= document.createTextNode('EDIT');
    ed.appendChild(edtxt);
    ed.setAttribute("id","edit");
    ed.setAttribute("class","btn btn-sm");
    ed.setAttribute("onclick","ed_item(this)");
    li.appendChild(ed);

    list.appendChild(li);
    item.value ='';


}

function del_item(e){
    e.parentNode.remove()

}
function delAll(){
   list.innerHTML='';
}
function ed_item(e){
     var val=e.parentNode.firstChild.nodeValue;
     var ed_val=prompt("enter edit value",val);
     e.parentNode.firstChild.nodeValue= ed_val;
}