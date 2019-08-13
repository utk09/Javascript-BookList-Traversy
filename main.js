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
        const StoredBooks = [{
                title: 'John Doe',
                author: 'Jane Doe',
                isbn: '123456789'
            },
            {
                title: 'Vroom Vroom',
                author: 'Lallantop',
                isbn: '234237493'
            }
        ];

        const books = StoredBooks;

        console.log(books);

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "btn btn-danger btn-sm delete">'x'</a></td>
        `
        list.appendChild(row);


    }
}

// Store Class: Handles Storage

// Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Evnt: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instantiate Book
    const book = new Book(title, author, isbn);

    console.log(book)

});

// Event: Remove a Book