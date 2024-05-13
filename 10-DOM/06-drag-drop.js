//drag and drop
let id;
function allowDrop(ev) {
    let elementSpan = document.createElement('span');
    elementSpan.id = 'span';
    elementSpan.innerHTML = 'Arrastrame';
    elementSpan.draggable = true;
    elementSpan.ondragstart = e =>{
        id = e.target.id;
    }
    return elementSpan;
}
function dropArea(){
    let dropArea = document.createElement('div');
    dropArea.className = 'draggable';
    dropArea.ondragover = e =>{
        e.target.style.backgroundColor = 'yellow';
    }
    dropArea.ondragleave = e =>{
        e.target.style.backgroundColor = '';
    }

    dropArea.ondragover = e =>{
        e.preventDefault();
    }

    dropArea.ondrop = e =>{
        e.target.appendChild(document.getElementById(id));
    }
    return dropArea;
}
let area1 = dropArea();
let area2 = dropArea();
let area3 = dropArea();
let draggable = allowDrop();
document.body.append(area1,area2,area3,draggable);