let popup = document.getElementById('myPopup');
let popupText = document.querySelector('.popupText')
let show = document.querySelector('.show')
const addBook = document.querySelector('.addBook');
const close = document.createElement('div');


const myLibrary = [];

function Book(title, length, readStatus){
    this.title = title;
    this.length = length;
    this.readStatus = readStatus;
}

addBook.addEventListener('click', () =>{
    removeAllChildNodes(popup);
    popup.classList.toggle('show');
    populatePopup();
});

close.onclick = () => { 
    removeAllChildNodes(popup);
    popup.classList.toggle('show');
};

function populatePopup(){
    closePopup();
    const name = document.createElement('input');
    name.classList.add('name');
    name.textContent = "Name: "
    popup.appendChild(name);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function closePopup(){
    close.classList.add('close');
    close.textContent = 'X';
    popup.appendChild(close);
}