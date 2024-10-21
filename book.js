class Library {
    #books = [];
    constructor(libBooks) {
        const unique = [...new Set(libBooks)];
        const diff = libBooks.length - unique.length;
        if (diff > 0) {
            throw new Error(`Есть дубликаты`);
        }
        this.#books = libBooks;
    }
    get allBooks() {
        console.log(this.#books);
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга уже есть`);
        } else this.#books.push(title);
    }
    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error(`Такой книги больше нет`);
        } else {
            const index = this.#books.indexOf(title);
            this.#books.splice(index, 1);
        }
    }
    hasBook(title) {
        return this.#books.includes(title);
    }

}

const Library1 = new Library(["Вишневый сад", "Жизнь взаймы", "Повелитель мух", "Повелитель мух"]);


Library1.allBooks;
Library1.addBook("Что делать?");
Library1.allBooks;
Library1.removeBook("Что делать?");
Library1.hasBook("Что делать?");
Library1.allBooks;