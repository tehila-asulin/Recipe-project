const Recipe = require('../models/Recipe');


exports.createRecipe = async (req, res) => {
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
};


exports.deleteRecipe = async (req, res) => {
   
};

exports.updateRecipe = async (req, res) => {
   
};
