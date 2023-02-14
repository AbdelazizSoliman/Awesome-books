// store book
const storeData = JSON.parse(localStorage.getItem('Added Books'));
function createBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    books += `
                <p>${arr[i].title}</p>
                <p>${arr[i].author}</p>
                <button onclick="removeBook(${i})">Remove</button>
                <hr/>
                `;
  }
  return books;
}

// Diplaying books
function DisplayBooks() {
  const listOfBooks = document.querySelector('.books-list');
  listOfBooks.innerHTML = `
                  <div>
                  ${createBooks(storeData)}</div>
              `;
}

// Adding books
function addBook(bookTitle, bookAuthor) {
  const Book = {
    title: bookTitle,
    author: bookAuthor,
  };
  storeData.push(Book);
  DisplayBooks();
}
// Remove data from local storage
function removeBook(i) {
  storeData.splice(i, 1);
  DisplayBooks();
}

// Getting values from input fields
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  e.preventDefault();
  addBook(title.value, author.value);
});

window.onload = DisplayBooks();
