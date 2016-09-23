

exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_table', function(table) {
		table.increments('id');
		table.string('book_title');
		table.string('genre');
    table.string('description');
    table.string('cover_url');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_table');
};
