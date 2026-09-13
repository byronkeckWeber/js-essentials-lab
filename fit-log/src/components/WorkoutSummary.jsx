

function WorkoutSummary(props) {

    // Used Claude AI to get the duration to add the integers instead of strings together.
    // It produced the Number() and ((sum, workout) => sum + duration, 0) basic outline
    const total = props.items.reduce((sum, workout) => 
    sum + Number(workout.duration), 0);

    const amount = props.items.length;

    return (
        <div>
            <h3>Summary</h3>
            <p>Workout Type: {props.type}</p>
            <p>Amount of Workout sessions: {amount}</p>
            <p>Total minutes spent: {total}</p>
        </div>
    );
}

export default WorkoutSummary;