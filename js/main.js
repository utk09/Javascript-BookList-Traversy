// console.log("Hello World!")

// Book Class: Represents a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Class

class UI {
    static displayBooks() {
        const storedBooks = [{
                title: 'John Doe',
                author: 'Jane Doe',
                isbn: '123456789'
            },
            {
                title: 'Vroom Vroom',
                author: 'Lallanop',
                isbn: '234237493'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>
        `
    }
}

// Store Class: Handles Storage

// Event: Display Books

// Evnt: Add a Book

// Event: Remove a Book