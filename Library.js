class Library {
  constructor() {
    this.availableBooks = [];
    this.borrowedBooks = [];
    this.users = [];
  }

  addToAvailableBook(book) {
    this.availableBooks.push(book);
  }

  addToBorrowedBooks(book) {
    this.borrowedBooks.push(book);
  }

  removeAvailableBook(book) {
    const index = this.availableBooks.indexOf(book);
    if (index !== -1) {
      this.availableBooks.splice(index, 1);
    }
  }

  removeBorrowedBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
    }
  }

  lendBooks(user, book) {
    user.em
    for (user of this.users ) {
      if (user.em)
    }

  }
}
