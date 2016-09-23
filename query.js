'use strict'
// verify this one later
const knex = require('../db/knex');

function Books() {
  return knex('books_table');
}

function Authors() {
  return knex('authors_table')
}

function ConnectBooksAuthors(){
  return knex('books_table')
  .join('authors_table', 'books_table.id', '=', 'authors_table.id');
}

module.exports = {
  getAllAuthors: Authors,
  getAuthorById: function(id) {
    return Authors().where('id', id);
  };
  createNewAuthors : function(id , author_firstName, author_lastName, author_bio, author_pic_url)
  {   return Authors().insert({
        // do we need id? Why/Whynot?
        // id: authorId,
        author_firstName : authorFirstN,
        author_lastName  : authorLastN,
        author_bio : authorBio
        author_pic_url : authorPicUrl,
  })

},
  deleteAuthor : function (AuthorId)
  {
    //should below be 'authors_table_Id'?
    return Authors().where('id', id).del();
  },
  getAllAuthors : Authors,
  getAuthorById : function(AuthorId) {
    //should below be 'authors_table_Id'?
    return Authors().where('authors_table_Id')
  },

  //recreate above but for books
  getAllBook: Books,
  getBookbyId: function(id) {
    return Books().where('id', id);
  },
  createNewBooks : function(id, book_title, genre, description, cover_url)
  { return Books().insert({
    book_title : bookTitle,
    genre: bookGenre,
    description: bookDescription,
    cover_url: bookCoverUrl,
  })

  },
  //Are you sure BookId is correct?
  deleteBook : function(BookId){
  //should below be 'authors_table_Id'?
  return Books().where('id', id).del();
  }
  getAllBooks : Books,
  //Are you sure BookId is correct?
  getBookbyId : function(BookId) {
    return Authors().where('books_table_Id')
  }
};
