exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {ingredient_id: 1, ingredient_name: 'water', unit: 'fl oz'},
    {ingredient_id: 2, ingredient_name: 'potato', unit: 'unit'},
    {ingredient_id: 3, ingredient_name: 'eggs', unit: 'unit'}
  ]);
};
