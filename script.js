// This will keep track of the number of books currently being stored.
let library = [];

// You shouldn't need card count... just use the length of library.
let cardCount = document.getElementsByTagName("div").length;
function addDeleteFunction() {
  const main = document.getElementById("main-div");
  const deleteButton = document.getElementsByClassName("deleteButton");
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", () => {
      let index = parseInt(deleteButton[i].accessKey);
      library.splice(index, 1);
      let bookToDelete = document.getElementById("book" + index);
      main.removeChild(bookToDelete);
      cardCount -= 1;
    })
  }
}

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
  const backgroundColor = document.getElementById("color").value;
  let book = new Book(title, author, numOfPages, language, published, hasItBeenRead, backgroundColor);
  addBookToLibrary(book);
})

function clearInput() {
  const title = document.getElementById("title").value = "";
  const author = document.getElementById("author").value = "";
  const numOfPages = document.getElementById("pages").value = "";
  const language = document.getElementById("language").value = "";
  const published = document.getElementById("published").value = "";
  span.click();
  addDeleteFunction();
}




function addBookToLibrary(obj) {
  library.push(obj);
  let workLibrary = [...library];
  displayLibrary(workLibrary, cardCount);
}

function displayLibrary(arr, qty) {
  const main = document.getElementById("main-div");
  for (let i = 0; i < arr.length; i++) {
    if (qty > 1) {
      for (let i = 0; i < qty - 1; i++) {
        arr.shift();
      }
    }


    let bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.id = "book" + (cardCount - 1);
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let numPages = document.createElement("p");
    let language = document.createElement("p");
    let published = document.createElement("p");
    title.classList.add("responsiveText");
    author.classList.add("responsiveText");
    numPages.classList.add("responsiveText");
    language.classList.add("responsiveText");
    published.classList.add("responsiveText");
    title.innerHTML = `${arr[i].title}`;
    author.innerHTML = `Written By: ${arr[i].author}`;
    numPages.innerHTML = `Number of pages: ${arr[i].numPages}`;
    language.innerHTML = `Language: ${arr[i].language}`;
    published.innerHTML = `Published: ${arr[i].published}`;
    let star = document.createElement("img");
    star.src = "./Assets/star.svg";
    star.alt = "Icon of star. Indicates book has been read.";
    star.classList.add("star");
    star.classList.add("noDisplay");
    if (`${arr[i].hasItBeenRead}` === "Yes") {
      star.classList.toggle("noDisplay");
    }
    let deleteButton = document.createElement("button");
    let xSVG = document.createElement("img");
    xSVG.src = "./Assets/deleteButton.svg"
    xSVG.style = "width: 20px; height: 20px";
    deleteButton.classList.add("deleteButton")
    deleteButton.accessKey = cardCount - 1;
    deleteButton.appendChild(xSVG);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(numPages);
    bookCard.appendChild(language);
    bookCard.appendChild(published);
    bookCard.appendChild(star);
    bookCard.appendChild(deleteButton);
    bookCard.style = `background-color: ${arr[i].backgroundColor}`;
    main.appendChild(bookCard);
    cardCount += 1;
  }

  clearInput();
}



