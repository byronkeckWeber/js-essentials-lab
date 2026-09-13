function ScoreCard(props) {
    return (
        <div className="card">
            <h4>{props.initials}</h4>
            <p>Game Title: {props.title}</p>
            <p>High Score: {props.highScore.toLocaleString()}</p>
            <p>Category: {props.category}</p>
        </div>
    );
}

export default ScoreCard;
