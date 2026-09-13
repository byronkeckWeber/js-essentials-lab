function ScoreSummary(props) {

    const amount = props.items.length;

    const average = amount > 0 ? props.items.reduce((sum, score) =>
    sum + Number(score.score), 0) / amount : 0;
    
    let max = 0;
    let player = '';
    let game = '';

    for(const score of props.items) {
        if (Number(score.score) > max) {
            max = Number(score.score);
            player = score.playerInitials;
            game = score.gameTitle;
        }
    }


    return (
        <div className="card" id="Summary">
            <h3>Summary</h3>
            <p>Category: {props.category}</p>
            <p>Highest Score: {max.toLocaleString()} Their Initials: {player} The Game: {game}</p>
            <p>Average High Score: {average.toLocaleString(undefined, {maximumFractionDigits: 3})}</p>
        </div>
    );
}

export default ScoreSummary;
