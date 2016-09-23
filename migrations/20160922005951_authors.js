
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors_table', function(table) {
		table.increments('id');
		table.string('author_firstName');
		table.string('author_lastName');
    table.string('author_bio');
    table.string('author_pic_url');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors_table');
};
