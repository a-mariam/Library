// User Class: Design a `User` class to represent library users. Users should have attributes like
// name, contact information, and a list of borrowed books

class User {
  constructor(name, contactInformation, books, borrowingCapacity, email) {
    this.name = name;
    this.contactInformation = contactInformation;
    this.email = email
    this.borrowedBooks = [];
    this.borrowingCapacity = borrowingCapacity
    
  }

  borrowBook (book) {
    if (this.borrowingCapacity > 1 && !this.borrowedBooks.includes(book)) {

    this.borrowedBooks.push(book);
    this.borrowingCapacity -1;
  }}



  returnBook (book) {
    if (this.borrowingCapacity != 5 && this.borrowedBooks.includes(book)) {
    var index = this.borrowedBooks.indexOf(book)
    this.borrowedBooks.splice(index, book)
    this.borrowingCapacity +1;
  }
}
