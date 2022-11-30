exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_id: 1, 
      recipe_name: 'Boiled water', 
      created_at: "2021-01-01 08:23:19.120", 
      steps:[{step_id: 1, 
              step_number: 1, 
              step_instructions: "boil water", 
              ingredients: [{ingredient_id: 1,
                             ingredient_name: "water", 
                             quanitity: "1.5"}]
           }]
         },
    {recipe_id: 2, 
      recipe_name: 'Baked potato', 
      created_at: "2021-03-01 08:23:19.120", 
      steps:[{step_id: 3, 
              step_number: 1, 
              step_instructions: "bake the potato", 
              ingredients: [{ingredient_id: 2,
                             ingredient_name: "potato", 
                             quanitity: "1"}]
           }]
          }, 
    {recipe_id: 3, 
            recipe_name: 'scrambled eggs', 
            created_at: "2021-02-01 08:23:19.120", 
            steps:[{step_id: 2, 
                    step_number: 1, 
                    step_instructions: "scramble ALL the eggs", 
                    ingredients: [{ingredient_id: 1,
                                   ingredient_name: "eggs", 
                                   quanitity: "12"}]
                 }]
            }
  ]);
};
