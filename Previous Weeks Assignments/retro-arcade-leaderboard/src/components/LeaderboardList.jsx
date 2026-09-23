import ScoreCard from "./ScoreCard";
import ScoreSummary from "./ScoreSummary";

function LeaderboardList(props) {


    return (
        <div className="card">
            <h2>Leaderboard</h2>

            <ScoreSummary items = {props.items} category = {props.category} />


            {props.items.length === 0 ? (
                <p>No Highscores for this category yet.</p>

            ) : ( 

                props.items.map((highScore) => (
                    <ScoreCard
                    key={highScore.id}
                    initials={highScore.playerInitials}
                    title={highScore.gameTitle}
                    highScore={highScore.score}
                    category={highScore.category} />
            )))}
        </div>
    );
}

export default LeaderboardList;
