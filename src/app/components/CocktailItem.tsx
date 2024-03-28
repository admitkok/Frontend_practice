import React from 'react';

interface CocktailItemProps {
    cocktail: {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
        strInstructions: string;
        strIngredient1: string;
        strIngredient2: string;
        // Add more properties as needed
    };
}

const CocktailItem: React.FC<CocktailItemProps> = ({ cocktail }) => {
    return (
        <div style={{display:"flex", flexDirection:"row", margin: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', alignItems:"center"}}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '300px', height: '300px', marginRight: '10px', borderRadius: '5px', objectFit: 'cover' }} />
            <div style={{ flex: '1' }}>
                <h4>{cocktail.strDrink}</h4>
                <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    <li>{cocktail.strIngredient1}</li>
                    <li>{cocktail.strIngredient2}</li>
                </ul>
            </div>
        </div>
    );
};

export default CocktailItem;
