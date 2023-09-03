let popup = document.getElementById('myPopup');
let popupText = document.querySelector('.popupText');
let show = document.querySelector('.show');
let lib = document.querySelector('.myLibrary');
const addBook = document.querySelector('#bookButton');
const close = document.createElement('button');
const addBookBtn = document.createElement('button');

const myLibrary = [];

function Book(title, length, author){
    this.title = title;
    this.length = length;
    this.author = author;
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
addBookBtn.onclick = () => {
    popup.classList.toggle('show');
    count = 0;
    createBook();
    populateLibrary();
};

function populatePopup(name,author,pages){
    closePopup();
    name="Name";
    author="Author";
    pages="Pages";
    createLable(name);
    createLable(author);
    createLable(pages);
    createBookButton();
}
function createBookButton(){
    addBookBtn.id="addBook";
    addBookBtn.textContent="Add Book";
    popup.appendChild(addBookBtn);
};    

function createBook(){
    let bookName = document.getElementById('Name').value;
    let author = document.getElementById('Author').value;
    let pages = document.getElementById('Pages').value;
    const book = new Book(bookName, author, pages);
    myLibrary.push(book);
}

function populateLibrary(){
    let i = myLibrary.length-1;
    const book = document.createElement('div');
    book.textContent = `${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].length}`;
    lib.appendChild(book);
}

function createLable(lable){
    const nameLable = document.createElement('lable');
    nameLable.for = lable;
    nameLable.textContent = `${lable}: `;
    const elem = document.createElement('input');
    elem.id=lable;
    popup.append(nameLable);
    nameLable.appendChild(elem);
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
