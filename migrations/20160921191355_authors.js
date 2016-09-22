exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table) {
		table.increments('id');
		table.string('author-1-firstName');
		table.string('author-1-lastName');
    table.string('author-1-bio');
    table.string('author-1-pic-url');
    table.string('author-2-firstName');
    table.string('author-2-lastName');
    table.string('author-2-bio');
    table.string('author-2-pic-url');
    table.string('author-3-firstName');
    table.string('author-3-lastName');
    table.string('author-3-bio');
    table.string('author-3-pic-url');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
