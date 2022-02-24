import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleDelete }) {

	const recipeElements = recipes.map((recipe, index) => (
		<Recipe
			recipeData={recipe}
			key={index}
			deleteRecipe={() => handleDelete(index)}
		/>
	));

	return (
		<div className="recipe-list">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Cuisine</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Preparation</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{recipeElements}
				</tbody>
			</table>
		</div>
	);
}

export default RecipeList;
