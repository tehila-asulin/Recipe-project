const Recipe = require('../models/Recipe');


exports.createRecipe = async (req, res) => {
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
};


exports.deleteRecipe = async (req, res) => {
  const  {id} = req.params
  console.log(id);
    try {
      const deletedRecipe = await Recipe.findOneAndDelete({ _id: id });
      if (!deletedRecipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      console.error('Failed to delete recipe:', error);
      res.status(500).json({ message: 'Failed to delete recipe' });
    }
   
};

exports.updateRecipe = async (req, res) => {
   
};
exports.getAllRecipes = async (req, res) => {
    try {

      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      console.error('Failed to get recipes:', error);
      res.status(500).json({ message: 'Failed to get Recipes' });
    }
  };
