'use strict'
// verify this one later
const knex = require('../db/knex');

function Books() {
  return knex('books_table');
}

function Authors() {
  return knex('authors_table')
}

module.exports = {
  getAllAuthors: Authors,
  getAllAuthors function(id) {
    return Authors().where('id', id);
  };
  createNewAuthors : function(id , author_1_firstName, author_1_lastName, author_1_bio, author_1_pic_url, author_2_firstName, author_2_lastName, author_2_bio, author_2_pic_url, author_3_firstName, author_3_lastName, author_3_bio, author_3_pic_url)
  {   return Authors().insert({
        author_1_firstName : author1FirstN,
        author_1_lastName  : author2LastN,
        author_1_bio : author1Bio
        author_1_pic_url : author1PicUrl,

        author_2_firstName : author1FirstN,
        author_2_lastName  : author2LastN,
        author_2_bio : author1Bio
        author_2_pic_url : author1PicUrl,

        author_3_firstName : author1FirstN,
        author_3_lastName  : author2LastN,
        author_3_bio : author1Bio,
        author_3_pic_url : author1PicUrl
  })

},
  deleteAuthor : function (AuthorId)
  {
    return Authors().where('Authors_Id', AuthorId).del();
  }
  getAllAuthors : Authors,
  getAuthorById : function(AuthorId) {
      return Authors()
  }
}
