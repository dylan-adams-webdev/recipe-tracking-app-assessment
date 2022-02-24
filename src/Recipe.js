import React from "react";

function Recipe({ recipeData, deleteRecipe }) {
	return (
		<tr>
			<td>
				{recipeData.name}
			</td>
			<td>
				{recipeData.cuisine}
			</td>
			<td>
				<img src={recipeData.photo} alt="The finished product" />
			</td>
			<td className="content_td">
				<p>{recipeData.ingredients}</p>
			</td>
			<td className="content_td">
				<p>{recipeData.preparation}</p>
			</td>
			<td>
				<button name="delete" onClick={deleteRecipe}>Delete</button>
			</td>
		</tr>
	);
}

export default Recipe;