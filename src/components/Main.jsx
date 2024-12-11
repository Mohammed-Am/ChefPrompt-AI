import '../index.css'
import React from 'react'

export default function Main(){

    const [ingredients , setIngredients] = React.useState([])

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addIngredient(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredients = formData.get("ingredient");
        
        setIngredients(prev => [...prev , newIngredients])
    }

    return (
    <main>
        <form onSubmit={addIngredient}>
            <input 
                type="text"
                aria-label=''
                placeholder='e.g. oregano'
                name='ingredient'
            
            />
            <button 
                aria-label='Add ingredient'
            >
            Add ingredient
            </button>
        </form>

        <ul>
            {ingredientListItems}
        </ul>
    </main>    
    )
}