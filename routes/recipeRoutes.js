const express = require('express');
const {createRecipe,deleteRecipe,updateRecipe,getAllRecipes} = require('../controllers/recipeController');

const router = express.Router();
const User = require("../models/users");
router.post('/', createRecipe);
router.delete('/:id', deleteRecipe);
router.put('/:id', updateRecipe);
router.get('/recipes',getAllRecipes)
module.exports = router;
