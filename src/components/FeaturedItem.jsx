// In FeaturedItem.jsx, display the item's image, name, price, and description. 
// You may use the name or description of the item as the alt tag of the image, but don't forget to specify it! 
// Notice that the data has already been passed to this component from BadgerMart.jsx

import { Button, Table, Card } from 'react-bootstrap';
import { useState } from 'react';

export default function FeaturedItem(props) {
    const [nutritionFacts, setNutritionFacts] = useState(false);

    const toggleNutritionFacts = () => {
        setNutritionFacts(!nutritionFacts);
    };

    return <Card style={{margin: "auto", marginTop: "1rem", maxWidth: "40rem"}}>
        {/* image */}
        <img src={props.img} alt={props.name} />
        {/* name */}
        <h3>{props.name}</h3>
        {/* price */}
        <p>${props.price} per unit</p>
        {/* description */} 
        <p>{props.description}</p>
        {/* In FeatureItem.jsx, add a table of nutrition facts. This table should only 
        be displayed while the button reads "Hide Nutrition Facts". 
        When the button reads "Show Nutrition Facts" this table should be hidden.
        The table should consist of a single table header of "Calories", "Fat", "Carbohydrates", 
        and "Protein" and a table body of a single row that contains the featured item's macronutrients respectively.
        Please note that while each featured item is guaranteed to have a nutrition object that contains calories, 
        it is not always guaranteed to have an amount of fat, carbohydrates, or protein. You should assume 
        that any missing macronutrients are "0g". */}

        {nutritionFacts && <Table>
            <thead>
                <tr>
                    <th>Calories</th>
                    <th>Fat</th>
                    <th>Carbohydrates</th>
                    <th>Protein</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.nutrition.calories}</td>
                    <td>{props.nutrition.fat || "0g"}</td>
                    <td>{props.nutrition.carbohydrates || "0g"}</td>
                    <td>{props.nutrition.protein || "0g"}</td>
                </tr>
            </tbody>
        </Table>}

        <Button onClick={toggleNutritionFacts}>
            {nutritionFacts ? "Hide Nutrition Facts" : "Show Nutrition Facts"}
        </Button>
    </Card>
}