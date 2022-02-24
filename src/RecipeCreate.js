import React, { useState } from "react";

function RecipeCreate({ submitData }) {

	const initialState = {
		name: "",
		cuisine: "",
		photo: "",
		ingredients: "",
		preparation: "",
	};

	const [formData, setFormData] = useState({ ...initialState });

	const handleChange = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		submitData({ ...formData });
		setFormData({ ...initialState });
	};
	// TODO: Add the required input and textarea form elements.
	// TODO: Add the required submit and change handlers

	return (
		<form name="create" onSubmit={handleSubmit}>
			<table>
				<tbody>
					<tr>
						<td>
							<input
								type="text"
								id="name"
								name="name"
								onChange={handleChange}
								value={formData.name}
								placeholder="Name"
								required
							/>
						</td>
						<td>
							<input
								type="text"
								id="cuisine"
								name="cuisine"
								onChange={handleChange}
								value={formData.cuisine}
								placeholder="Cuisine"
								required
							/>
						</td>
						<td>
							<input
								type="url"
								id="photo"
								name="photo"
								onChange={handleChange}
								value={formData.photo}
								placeholder="URL"
								required
							/>
						</td>
						<td>
							<textarea
								id="ingredients"
								name="ingredients"
								onChange={handleChange}
								value={formData.ingredients}
								placeholder="Ingredients"
								required
							/>
						</td>
						<td>
							<textarea
								id="preparation"
								name="preparation"
								onChange={handleChange}
								value={formData.preparation}
								placeholder="Preparation"
								required
							/>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
