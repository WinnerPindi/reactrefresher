import './NewGoal.css'
import { useState } from "react" 

export default function NewGoal(props) {

    const [enteredText, setEnteredText] = useState(''); 
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText 
        };
        setEnteredText(''); // Réinitialiser la variable d'état après l'ajout
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
       setEnteredText(event.target.value); // Utiliser la fonction de mise à jour
    }

    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">Add Goal</button>
        </form>
    )
}
