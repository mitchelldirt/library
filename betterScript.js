// stores all of the book objects
let library = [];

// constants used throughout my functions. Globally declared to avoid declaring each time.
const title = document.getElementById("title");
const author = document.getElementById("author");
const numOfPages = document.getElementById("pages");
const language = document.getElementById("language");
const published = document.getElementById("published");
const hasItBeenRead = document.getElementById("read");
const backgroundColor = document.getElementById("color");

// Below is the code for the modal. This is used to grab input from the user for the book objects.
const modal = document.getElementById("myModal");
const btn = document.getElementById("addBookButton");
const span = document.getElementsByClassName("close")[0];
const submitBook = document.getElementById("bookSubmit");

// Prevent submitBook button from refreshing the page.
submitBook.addEventListener("click", (event) => { event.preventDefault(); });

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

// Book object constructor.
function Book(title, author, numPages, language, published, hasItBeenRead, backgroundColor) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.language = language;
    this.published = published;
    this.hasItBeenRead = hasItBeenRead;
    this.backgroundColor = backgroundColor;
}

// After pressing the submit button in the modal create a new book object.
submitBook.addEventListener("click", () => {
    let book = new Book(title.value, author.value, numOfPages.value, language.value, published.value, hasItBeenRead.value, backgroundColor.value);
    library.push(book);

})

// function 1 to display books

// function 2 to display books

// Clear the input after the submitButton is clicked.
function clearInput() {
    title.value = "";
    author.value = "";
    numOfPages.value = "";
    language.value = "";
    published.value = "";
    span.click();
    // possibly remove below function if you do the below comment.
    addDeleteFunction();
}

// TODO: Add the function here adding the delete button OR !!!try and put it in the display books button!!!