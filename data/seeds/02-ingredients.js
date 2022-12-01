
exports.seed = async function(knex) {
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    {ingredient_name: 'water', ingredient_unit: 'fl oz'},
    {ingredient_name: 'potato', ingredient_unit: "lbs"},
    {ingredient_name: 'egg', ingredient_unit: "single egg"}
  ]);
};
