let popup = document.getElementById('myPopup');
let popupText = document.querySelector('.popupText');
let show = document.querySelector('.show');
let lib = document.querySelector('.myLibrary');
const bookRead = document.querySelectorAll('.bookItem');
const buttons = document.querySelectorAll('.bookBtn');
const addBook = document.querySelector('#bookButton');
const close = document.createElement('button');
const addBookBtn = document.createElement('button');

const myLibrary = [];

function Book(title, length, author, isRead){
    this.title = title;
    this.length = length;
    this.author = author;
    this.isRead = isRead;
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
    createRead();
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
    let read = document.getElementById('isRead');
    if(read.checked === true) isRead = "Read";
    if(read.checked === false) isRead = "Not Read"
    const book = new Book(bookName, author, pages, isRead);
    myLibrary.push(book);
}

function populateLibrary(){
    let i = myLibrary.length-1;
    const book = document.createElement('div');
    const readButton = document.createElement('button');
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].length}`;
    book.classList="bookItem";
    book.id = i;
    readButton.classList = 'bookBtn';
    readButton.textContent = myLibrary[i].isRead;
    (function(button) {
        button.addEventListener('click', function(){
          console.log('Event listener added to button', button.textContent)
          const parent = button.parentNode;
          const parentID = parent.id;
          if (myLibrary[parentID].isRead === "Not Read") {
            myLibrary[parentID].isRead = "Read";
            button.textContent = "Read"; // Change the text content
          }
        });
      })(readButton); // Pass readButton as an argument to the IIFE
    book.appendChild(bookInfo);
    book.appendChild(readButton);
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

function createRead(){
    let readDiv = document.createElement('div');
    const readCheckBox = document.createElement('input');
    readDiv.classList = "readDiv"; 
    readCheckBox.type = "checkbox";
    readCheckBox.id="isRead";
    const readLable = document.createElement('lable');
    readLable.for="isRead";
    readLable.textContent="Read:"
    popup.appendChild(readDiv);
    readDiv.appendChild(readLable);
    readDiv.appendChild(readCheckBox);
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
