
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del()
  await knex('steps').insert([
    {step_id: 1, step_number: 1, step_instructions: 'boil water', recipe_id: 1},
    {step_id: 2, step_number: 1, step_instructions: 'scramble ALL the eggs', recipe_id: 3},
    {step_id: 3, step_number: 1, step_instructions: 'bake the potato', recipe_id: 2}
  ]);
};
