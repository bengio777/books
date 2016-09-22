exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
		table.increments('id');
		table.string('book-title');
		table.string('genre');
    table.string('description');
    table.string('cover-url');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
