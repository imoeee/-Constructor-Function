
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author_obj, genre, price) {
    this.title = title;
    this.author_obj = author_obj;
    this.genre = genre;
    this.price = price;
    // getBookInfo
    this.getBookInfo = function () {
        console.log(`Title : ${this.title}\nAuthor's name : ${this.author_obj.name}\nGenre : ${this.genre}\nPrice : ${this.price}.`)
    }
}
// Creating instances of Author
let author_1 = new Author('Robert T. Kiyosaki', 1947, 'Japanese-American');
let author_2 = new Author("Jane Smith", 1975, "British");


// Creating instances of Author
let Book_1 = new Book('Rich Dad Poor Dad', author_1, 'Personal finance', 437)
let Book_2 = new Book("Adventure Awaits", author_2, "Adventure", 19.99);


// Displaying book details
console.log("Bookstore Inventory:");
console.log("----------------------------");
Book_1.getBookInfo();
console.log("----------------------------");
Book_2.getBookInfo();
console.log("----------------------------");