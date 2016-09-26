'use strict;'
//Include crypto to generate the book id
var _ = require('lodash');

module.exports = function() {
    return {
        bookList: [],
        /*
         * Save the book inside the "db".
         */
        save(book) {
            book.id = (_.isEmpty(this.bookList)) ? 1 : _.maxBy(this.bookList, 'id').id + 1;
            console.log('>>> : ' + book.id);
            this.bookList.push(book);
            return 1;
        },
        /*
         * Retrieve a book with a given id or return all the books if the id is undefined.
         */
        find(id) {
            if (id) {
                return this.bookList.find(element => {
                    return element.id === id;
                });
            } else {
                return this.bookList;
            }
        },
        /*
         * Delete a book with the given id.
         */
        remove(id) {
            var found = 0;
            this.bookList = this.bookList.filter(element => {
                if (element.id === id) {
                    found = 1;
                } else {
                    return element.id !== id;
                }
            });
            return found;
        },
        /*
         * Update a book with the given id
         */
        update(id, book) {
            console.log(id);
            console.log(typeof id);
            var bookIndex = this.bookList.findIndex(element => {
                return element.id === id;
            });
            console.log(bookIndex);
            if (bookIndex !== -1) {
                this.bookList[bookIndex].title = book.title;
                this.bookList[bookIndex].author = book.author;
                this.bookList[bookIndex].description = book.description;
                return 1;
            } else {
                return 0;
            }
        }
    }
};