

// PROJECT Section

const books = [{
    title: "Name of the wind";
    author: "Patrick Rothfuss";
    read: true;
}]

class Book {
    constructor (title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
} 

class Library {
    constructor (bookCount, books) {
        this.bookCount = books.length;
        this.books = books;
    }
    markRead (checkbox, id) {
        this.books.forEach(books => {
            if (id === books.id) {
                books.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }
}