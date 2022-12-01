
exports.seed = async function(knex) {
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_name: 'Boiled Water'},
    {recipe_name: 'Baked Potato'},
    {recipe_name: 'Scrambled Egg'}
  ]);
};
