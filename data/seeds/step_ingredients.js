exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').truncate()
  await knex('step_ingredients').insert([
    {si_id: 1, step_id: 1, ingredient_id: 1},
    {si_id: 2, step_id: 3, ingredient_id: 3},
    {si_id: 3, step_id: 2, ingredient_id: 2}
  ]);
};
