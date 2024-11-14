class Book {
    constructor(title, author, genre, year) {
         this.title = title;
         this.author = author;
         this.genre = genre;
         this.year = year;
    }

    getSummary() {
    return `Title: [${this.title}], Author: [${this.author}], Genre: [${this.genre}], Year: [${this.year}]`;
    }
}

let book1 = new Book( "To Kill A Mockingbird" , "Harper Lee" , "Novel" , 1960 );
let book2 = new Book( "Grapes of Wrath" , "John Steinbeck" , "Novel" , 1939 );
let book3 = new Book( "Of Mice and Men" , "John Steinbeck" , "Novel" , 1937 );
let book4 = new Book( "Thing Fall Apart" , "Chinua Achebe" , "Novel" , 1958 ); 

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);