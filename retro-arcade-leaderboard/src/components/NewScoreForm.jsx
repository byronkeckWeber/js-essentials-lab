
import { useState } from "react";

function NewScoreForm(props) {
    const [enteredInitials, setEnteredInitials] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredHighScore, setEnteredHighScore] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('Arcade Classic');

    const submitHandler = (event) => {
        event.preventDefault();

        const scoreData = {
            id: Math.random().toString(),
            playerInitials:enteredInitials,
            gameTitle: enteredTitle,
            score: Number(enteredHighScore),
            category: enteredCategory
        }

        props.onAddScore(scoreData);

        setEnteredInitials('');
        setEnteredTitle('');
        setEnteredHighScore('');
        setEnteredCategory('Arcade Classic');
    }
    return (
        <form className="card" onSubmit={submitHandler}>
            <div className="form-control">
                <label>Player Initials: </label>
                <input type="text"
                value={enteredInitials}
                onChange={(e) => setEnteredInitials(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Game Title: </label>
                <input type="text"
                value={enteredTitle}
                onChange={(e) => setEnteredTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>High Score: </label>
                <input type="number"
                value={enteredHighScore}
                onChange={(e) => setEnteredHighScore(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Category: </label>
                <select onChange={(e) => setEnteredCategory(e.target.value)}
                value = {enteredCategory}>
                    <option value="Arcade Classic">Arcade Classic</option>
                    <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
                    <option value="Indie Title">Indie Title</option>
                    <option value="Adventure Game">Adventure Game</option>
                </select>
            </div>
            <button type="submit">Add High-Score</button>
        </form>
    );
}

export default NewScoreForm;
