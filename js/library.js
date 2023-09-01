const addBook = document.querySelector('.addBook');

const myLibrary = [];

function Book(title, length, readStatus){
    this.title = title;
    this.length = length;
    this.readStatus = readStatus;
}

addBook.addEventListener('click', () =>{
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
});