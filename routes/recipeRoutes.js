const express = require('express');
const {createRecipe,deleteRecipe,updateRecipe,getAllRecipes,getUserById} = require('../controllers/recipeController');

const router = express.Router();
const User = require("../models/Users");
router.post('/', createRecipe);
router.delete('/:id', deleteRecipe);
router.put('/:id', updateRecipe);
router.get('/allrecipes',getAllRecipes)
router.get('/:id',getUserById)

module.exports = router;
