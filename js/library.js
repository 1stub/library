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

function Book(title, author, length, isRead, id){
    this.title = title;
    this.author = author;
    this.length = length;
    this.isRead = isRead;
    this.id = id;
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

let globalRead = false;
function createBook(){
    let bookName = document.getElementById('Name').value;
    let author = document.getElementById('Author').value;
    let pages = document.getElementById('Pages').value;
    let read = document.getElementById('isRead');
    let id = myLibrary.length;
      if(read.checked === true) isRead = "Read";
      if(read.checked === false) isRead = "Not Read"
    const book = new Book(bookName, author, pages, isRead,id);
    myLibrary.push(book);
    return globalRead = read.checked;
}

function populateLibrary(){
    let i = myLibrary.length-1;
    const book = document.createElement('div');
    const readButton = document.createElement('button');
    const delButton = document.createElement('button');
    const bookInfo1 = document.createElement('p');
    const bookInfo2 = document.createElement('p');
    const bookInfo3 = document.createElement('p');

    bookInfo1.textContent = `"${myLibrary[i].title}"`;
    bookInfo2.textContent = `${myLibrary[i].author}`;
    bookInfo3.textContent = `${myLibrary[i].length} pages`;

    book.classList="bookItem";
    book.id = i;
    readButton.classList = 'bookBtn';
    readButton.textContent = myLibrary[i].isRead;
    createReadButton(readButton);
    createDelButton(delButton);
    book.appendChild(bookInfo1);
    book.appendChild(bookInfo2);
    book.appendChild(bookInfo3);
    book.appendChild(readButton);
    book.appendChild(delButton);
    lib.appendChild(book);
}

function createReadButton(e){
    (function(button) {
        e.style.backgroundColor = "red";
        if(globalRead === true) e.style.backgroundColor = "green";
        button.addEventListener('click', function(){
          console.log('Event listener added to button', button.textContent)
          const parent = button.parentNode;
          const parentID = parent.id;
          if (myLibrary[parentID].isRead === "Not Read") {
            myLibrary[parentID].isRead = "Read";
            button.textContent = "Read"; // Change the text content
            e.style.backgroundColor = "green";
          }
        });
    })(e);// Pass readButton as an argument to the IIFE
}

function createDelButton(e){
      (function(button) {
        e.style.backgroundColor = "gray";
        button.textContent = "Delete";
        button.addEventListener('click', function(){
          const parent = button.parentNode;
          let indexParent = parent.id; 
          const par = document.getElementById(indexParent);
          par.parentNode.removeChild(par);
          const id = myLibrary[indexParent].id;
          myLibrary.splice(id, 1);
        });
  })(e);// Pass readButton as an argument to the IIFE
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
