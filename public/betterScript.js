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
let bookCards = document.getElementsByClassName("book");
let stars = document.getElementsByClassName("star");
let toggles = document.getElementsByClassName("toggle");

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
    let serializedBook = JSON.stringify(book);
    addLibraryToLocalStorage("book" + counter, serializedBook);
    displayLibrary(library, counter);
})

// function to display books (if `displayed` equals false then display it else don't display.
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
            let interactiveElements = document.createElement("span");
            interactiveElements.style = "background-color: tan; display: inline-flex; border-radius: 25px; padding: 12;\
            gap: 15px;"
            let readToggle = document.createElement("button");
            readToggle.accessKey = accessKeyNumber;
            readToggle.addEventListener("click", () => {
                changeReadStatus(readToggle, stars, toggleIMG)
            })
            readToggle.classList.add("toggle")
            let toggleIMG = document.createElement("img");
            toggleIMG.src = "./Assets/ios-toggle-off.png";
            readToggle.appendChild(toggleIMG);
            let star = document.createElement("img");
            star.src = "./Assets/star.png";
            star.alt = "Icon of star. Indicates book has been read.";
            star.classList.add("star");
            star.classList.add("noDisplay");
            star.accessKey = accessKeyNumber;
            if (`${arr[i].hasItBeenRead}` === "Yes") {
                star.classList.toggle("noDisplay");
                toggleIMG.src = "./Assets/ios-toggle-on.png"
                toggleIMG.classList.toggle("on")
            } else {
                toggleIMG.src = "./Assets/ios-toggle-off.png"
            }
            let deleteButton = document.createElement("button");
            let xSVG = document.createElement("img");
            xSVG.src = "./Assets/delete-button.png"
            xSVG.style = "width: 20px; height: 20px; !important"
            deleteButton.classList.add("deleteButton")
            deleteButton.accessKey = accessKeyNumber;
            // Add the delete functionality to each button
            deleteButton.addEventListener("click", () => {
                deleteBookCard(deleteButton.accessKey, bookCards)
            });
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
            deleteButton.appendChild(xSVG);
            interactiveElements.appendChild(readToggle);
            interactiveElements.appendChild(star);
            interactiveElements.appendChild(deleteButton);
            bookCard.appendChild(title);
            bookCard.appendChild(author);
            bookCard.appendChild(numPages);
            bookCard.appendChild(language);
            bookCard.appendChild(published);
            bookCard.appendChild(interactiveElements);
            bookCard.style = `background-color: ${arr[i].backgroundColor}`;
            main.appendChild(bookCard);
            counter += 1;
        }
    }
    clearInput();
}

// This is the same as displayLibrary but removes the displayed check because we know it will show as previously being displayed. This function fires onLoad.
function displayLocalLibrary(arr) {
    accessKeyNumber = 0;
    for (let i = 0; i < library.length; i++) {
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
        let interactiveElements = document.createElement("span");
        interactiveElements.style = "background-color: tan; display: inline-flex; border-radius: 25px; padding: 12;\
            gap: 15px;"
        let readToggle = document.createElement("button");
        readToggle.accessKey = accessKeyNumber;
        readToggle.addEventListener("click", () => {
            changeReadStatus(readToggle, stars, toggleIMG)
        })
        readToggle.classList.add("toggle")
        let toggleIMG = document.createElement("img");
        toggleIMG.src = "./Assets/ios-toggle-off.png";
        readToggle.appendChild(toggleIMG);
        let star = document.createElement("img");
        star.src = "./Assets/star.png";
        star.alt = "Icon of star. Indicates book has been read.";
        star.classList.add("star");
        star.classList.add("noDisplay");
        star.accessKey = accessKeyNumber;
        if (`${arr[i].hasItBeenRead}` === "Yes") {
            star.classList.toggle("noDisplay");
            toggleIMG.src = "./Assets/ios-toggle-on.png"
            toggleIMG.classList.toggle("on")
        } else {
            toggleIMG.src = "./Assets/ios-toggle-off.png"
        }
        let deleteButton = document.createElement("button");
        let xSVG = document.createElement("img");
        xSVG.src = "./Assets/delete-button.png"
        xSVG.style = "width: 20px; height: 20px; !important"
        deleteButton.classList.add("deleteButton")
        deleteButton.accessKey = accessKeyNumber;
        // Add the delete functionality to each button
        deleteButton.addEventListener("click", () => {
            deleteBookCard(deleteButton.accessKey, bookCards)
        });
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
        deleteButton.appendChild(xSVG);
        interactiveElements.appendChild(readToggle);
        interactiveElements.appendChild(star);
        interactiveElements.appendChild(deleteButton);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(numPages);
        bookCard.appendChild(language);
        bookCard.appendChild(published);
        bookCard.appendChild(interactiveElements);
        bookCard.style = `background-color: ${arr[i].backgroundColor}`;
        main.appendChild(bookCard);
        accessKeyNumber++;
    }
}


// Clear the input after the submitButton is clicked.
function clearInput() {
    title.value = "";
    author.value = "";
    numOfPages.value = "";
    language.value = "";
    published.value = "";
    span.click();
}

// Deletes the bookCard that matches the delete buttons accessKey.
function deleteBookCard(del, book) {
    for (let i = 0; i < library.length; i++) {
        if (del === book[i].accessKey) {
            let titleValue = "book" + book[i].accessKey;
            localStorage.removeItem(titleValue);
            library.splice(i, 1);
            main.removeChild(book[i]);
            return;
        }
    }
}

function changeReadStatus(sliderKey, star, img) {
    let i = 0;
    for (i; i < library.length; i++) {
        if (sliderKey.accessKey === star[i].accessKey) {
            star[i].classList.toggle("noDisplay");
            break;
        }
    }
    if (img.classList.contains("on")) {
        img.src = "./Assets/ios-toggle-off.png";
        img.classList.toggle("on");
        indexPosition = i;
        library[indexPosition].hasItBeenRead = "No";
        let serializedBook = JSON.stringify(library[indexPosition]);
        addLibraryToLocalStorage("book" + indexPosition, serializedBook);
        return;
    } else {
        img.src = "./Assets/ios-toggle-on.png";
        img.classList.toggle("on");
        indexPosition = i;
        library[indexPosition].hasItBeenRead = "Yes";
        let serializedBook = JSON.stringify(library[indexPosition]);
        addLibraryToLocalStorage("book" + indexPosition, serializedBook);
        return;
    }
}

// TODO: Create an array that lives in here under the name localLibrary. Push each item to this library.
let localStorage = window.localStorage;
function addLibraryToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function displayLocalStorage() {
    let localStorage = window.localStorage;
    let count = 0;
    try {
        for (let i = 0; i < localStorage.length; i++) {
            let deserializedBook = JSON.parse(localStorage.getItem("book" + count));
            if (deserializedBook == null || deserializedBook == undefined) {
                count++;
                i--;
                continue;
            } else {
                library.push(deserializedBook);
                count++;
            }
            // You may want to put displayLocalLibrary below everything to go last
        }
        displayLocalLibrary(library);
    } catch (error) {
        console.log("You have been saved from a crash :)")
        console.log(error)
        library = [];
        return;
    }
}

window.addEventListener("load", displayLocalStorage());

