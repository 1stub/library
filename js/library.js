let popup = document.getElementById('myPopup');
let popupText = document.querySelector('.popupText')
let show = document.querySelector('.show')
const addBook = document.querySelector('#bookButton');
const close = document.createElement('button');

const myLibrary = [];

function Book(title, length, readStatus){
    this.title = title;
    this.length = length;
    this.readStatus = readStatus;
}

let count = 0;
addBook.addEventListener('click', () =>{
    removeAllChildNodes(popup);
    if(count === 0){
        popup.classList.toggle('show');
        populatePopup();
    }
    else{
        populatePopup();
        count++;
    }
});
close.onclick = () => { 
    popup.classList.toggle('show');
    count = 0;
};

function populatePopup(){
    closePopup();
    const nameLable = document.createElement('lable');
    nameLable.for = "name";
    nameLable.textContent="Name :";
    const name = document.createElement('input');
    name.classList.add('name');
    name.id = "name";
    popup.append(nameLable)
    popup.appendChild(name);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function closePopup(){
    close.classList.add('close');
    close.id = "close";
    close.textContent = 'X';
    popup.appendChild(close);
}