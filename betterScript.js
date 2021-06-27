// stores all of the book objects
let library = [];
let counter = 0;

// constants used throughout my functions. Globally declared to avoid declaring each time.
const title = document.getElementById("title");
const author = document.getElementById("author");
const numOfPages = document.getElementById("pages");
const language = document.getElementById("language");
const published = document.getElementById("published");
const hasItBeenRead = document.getElementById("read");
const backgroundColor = document.getElementById("color");
const main = document.getElementById("main-div");

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
function Book(title, author, numPages, language, published, hasItBeenRead, backgroundColor, displayed) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.language = language;
    this.published = published;
    this.hasItBeenRead = hasItBeenRead;
    this.backgroundColor = backgroundColor;
    this.displayed = false;
}

// After pressing the submit button in the modal create a new book object.
submitBook.addEventListener("click", () => {
    let book = new Book(title.value, author.value, numOfPages.value, language.value, published.value, hasItBeenRead.value, backgroundColor.value);
    library.push(book);
    displayLibrary(library, counter);
})

// function 1 to display books (delete all and display all)

// function 2 to display books (if access key exists continue else display the book. --make delete button and the bookCard have the same access key for deletion purposes.)
function displayLibrary(arr, accessKeyNumber) {
    for (let i = 0; i < library.length; i++) {
        if (arr[i].displayed === true) {
            continue;
        } else {
            arr[i].displayed = true;
            let bookCard = document.createElement("div");
            bookCard.classList.add("book");

            // giving the bookCard an accessKey to match it to the hasItBeenRead star and the delete button.
            bookCard.accessKey = accessKeyNumber;
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
            // create a flex box div right here to store the delete button, read button, and star icon. 
            // Center this on a new line under the
            let star = document.createElement("img");
            star.src = "./Assets/star.svg";
            star.alt = "Icon of star. Indicates book has been read.";
            star.classList.add("star");
            star.classList.add("noDisplay");
            star.accessKey = accessKeyNumber;
            if (`${arr[i].hasItBeenRead}` === "Yes") {
                star.classList.toggle("noDisplay");
            }
            let deleteButton = document.createElement("button");
            let xSVG = document.createElement("img");
            xSVG.src = "./Assets/deleteButton.svg"
            xSVG.style = "width: 20px; height: 20px";
            deleteButton.classList.add("deleteButton")
            deleteButton.accessKey = accessKeyNumber;
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
            counter += 1;
        }
    }
    clearInput();
}

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

// TODO: Add the function here adding the delete button --delete from the DOM/page and also from the library--