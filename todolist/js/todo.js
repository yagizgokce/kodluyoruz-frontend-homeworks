
window.onload = loadStroge;
let storageArr;
if(JSON.parse(localStorage.getItem("todos")) !== null  ){
    storageArr = Array.from(JSON.parse(localStorage.getItem("todos")));
}else{
    storageArr = [];
}

function newElement(){
    let inputValue = document.querySelector("#task").value.trim();
    if(inputValue !== ''){
        showElement(inputValue);
        storageArr.push(inputValue);
        addStorage(storageArr);
        $(".success").toast("show");

    }else{
        $(".error").toast("show");
        document.querySelector("#task").value = "";

        
    }

}
    
    

function loadStroge(){
    if(storageArr.length !== 0){
        storageArr.forEach(value => {
            showElement(value);
        }
        )   
    }
}

function showElement(inputValue){
    const li = document.createElement("li");
    let temp = document.createTextNode(inputValue);
    li.appendChild(temp);
    document.querySelector("#list").appendChild(li);
    document.querySelector("#task").value = "";

    /* FOR DELETE ELEMENT */
    let btn = document.createElement("SPAN");
    btn.className = "close bi bi-trash";
    li.appendChild(btn);
    btn.onclick = function(){
        let oldElement = this.parentElement;
        let tempArr = storageArr;
        console.log(oldElement.outerText)
        let index = tempArr.indexOf(oldElement.outerText);
        console.log(index)
        tempArr.splice(index,1);
        addStorage(tempArr);
        oldElement.remove();
    
    }
    

}

function addStorage(arr){

    localStorage.setItem("todos", JSON.stringify(arr));
    
}

let list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);


