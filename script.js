function Book(title, author, numPages, language, published, hasItBeenRead, backgroundColor) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.language = language;
  this.published = published;
  this.hasItBeenRead = hasItBeenRead;
  this.backgroundColor = backgroundColor;
}

let book1 = new Book("The Mudd Bio", "Mitchell Mudd", 60, "English", "June 6, 2021", "green");
console.log(book1)

function addBook() {
  const main = document.getElementById("main-div");
  let bookCard = document.createElement("div");
  bookCard.classList.add("book");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let numPages = document.createElement("p");
  let language = document.createElement("p");
  let published = document.createElement("p");
  let star = document.createElement("img");
  title.innerHTML = `${book1.title}`;
  author.innerHTML = `Written By: ${book1.author}`;
  numPages.innerHTML = `Number of pages: ${book1.numPages}`;
  language.innerHTML = `Language: ${book1.language}`;
  published.innerHTML = `Published: ${book1.published}`;
  star.src = "./Assets/star.svg";
  star.alt = "Icon of star. Indicates book has been read.";
  star.classList.add("star");
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(numPages);
  bookCard.appendChild(language);
  bookCard.appendChild(published);
  bookCard.appendChild(star);
  main.appendChild(bookCard);
}