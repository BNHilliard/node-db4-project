
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments('recipe_id');
    tbl.varchar('recipe_name', 50).notNullable();
    tbl.varchar('created_at').notNullable();
    tbl.integer('steps');
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.varchar('ingredient_name'); 
    tbl.varchar('unit')
  })
  .createTable('steps', tbl => {
    tbl.increments('step_id');
    tbl.integer('step_number').notNullable();
    tbl.varchar('step_instructions', 500).notNullable();
    tbl.varchar('recipe_id').references('recipe_id').inTable('recipes').notNullable();
  })
  .createTable('step_ingredients', tbl => {
    tbl.increments('si_id');
    tbl.integer('step_id').references('step_id').inTable('steps');
    tbl.integer('ingredient_id').references('ingredient_id').inTable('ingredients');
  })

};


exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
