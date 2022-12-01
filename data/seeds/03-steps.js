exports.seed = async function(knex) {
  await knex('steps').truncate()
  await knex('steps').insert([
    {step_number: 1, step_text: 'Boil the water', recipe_id: 1}, 
    {step_number: 1, step_text: 'Bake the potato', recipe_id: 2},
    {step_number: 1, step_text: 'Scramble the egg', recipe_id: 3}
  ]);
};
 