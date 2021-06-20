function Book(title, author, numPages, hasItBeenRead, backgroundColor) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasItBeenRead = hasItBeenRead;
    this.backgroundColor = backgroundColor;
  }

let book1 = new Book("title", "person", 100, "yes", "green");
console.log(book1)