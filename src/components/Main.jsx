import '../index.css'
import React from 'react'

export default function Main(){

    const [ingredients , setIngredients] = React.useState([])

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addIngredient(formData){
        const newIngredients = formData.get("ingredient")
        setIngredients(prev => [...prev , newIngredients])
    }

    return (
    <main>
        <form action={addIngredient}>
            <input 
                type="text"
                aria-label=''
                placeholder='e.g. oregano'
                name='ingredient'
                required
            
            />
            <button 
                aria-label='Add ingredient'
                className='add-ingredient'
            >
            Add ingredient
            </button>
        </form>
        {
            ingredientListItems.length >= 1 &&
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>{ingredientListItems}</ul>
            <div className='container'>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredient</p>
                </div>
                <button>Get a recipe</button>
            </div>
        </section>
        }
        
    </main>    
    )
}