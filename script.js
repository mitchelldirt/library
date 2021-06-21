

function Book(title, author, numPages, language, hasItBeenRead, backgroundColor) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.language = language;
  this.hasItBeenRead = hasItBeenRead;
  this.backgroundColor = backgroundColor;
}

let book1 = new Book("title", "person", "English", 100, "yes", "green");
console.log(book1)

function addBook() {
  const main = document.getElementsByTagName("Main");
  bookCard = document.createElement("div");
  bookCard.classList.add("book")
  main.appendChild(bookCard);
}