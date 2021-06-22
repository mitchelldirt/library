// This will keep track of the number of books currently being stored.
let bookNum = 0;

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("addBookButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const submitBook = document.getElementById("bookSubmit");
submitBook.addEventListener("click", (event) => { event.preventDefault(); })
submitBook.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const numOfPages = document.getElementById("pages").value;
  const language = document.getElementById("language").value;
  const published = document.getElementById("published").value;
  const hasItBeenRead = document.getElementById("read").value;
  let book = new Book(title, author, numOfPages, language, published, hasItBeenRead);
  addBook(book);
})

function clearInput() {
  const title = document.getElementById("title").value = "";
  const author = document.getElementById("author").value = "";
  const numOfPages = document.getElementById("pages").value = "";
  const language = document.getElementById("language").value = "";
  const published = document.getElementById("published").value = "";
  const hasItBeenRead = document.getElementById("read").click();
  span.click();
}


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

function addBook(obj) {
  const main = document.getElementById("main-div");
  let bookCard = document.createElement("div");
  bookCard.classList.add("book");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let numPages = document.createElement("p");
  let language = document.createElement("p");
  let published = document.createElement("p");
  let star = document.createElement("img");
  title.innerHTML = `${obj.title}`;
  author.innerHTML = `Written By: ${obj.author}`;
  numPages.innerHTML = `Number of pages: ${obj.numPages}`;
  language.innerHTML = `Language: ${obj.language}`;
  published.innerHTML = `Published: ${obj.published}`;
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
  clearInput();
}



