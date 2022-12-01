const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resp => {
        res.status(200).json(resp)
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong in recipes router", 
    stack: err.stack
    })
})

module.exports = router