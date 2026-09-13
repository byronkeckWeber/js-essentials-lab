import NewScoreForm from './components/NewScoreForm';
import LeaderboardList from './components/LeaderboardList';
import CategoryFilter from './components/CategoryFilter';
import { useState } from 'react'
import './App.css'

  const INITIAL_SCORES = [
  { 
    id: "s1", 
    playerInitials: "PAC", 
    gameTitle: "Pac-Man", 
    score: 3333360,
    category: "Arcade Classic"
  },
  { 
    id: "s2", 
    playerInitials: "MAR", 
    gameTitle: "Donkey Kong", 
    score: 1260700,
    category: "Arcade Classic"
  },
  { 
    id: "s3", 
    playerInitials: "ACE", 
    gameTitle: "Galaga", 
    score: 1599100,
    category: "Sci-Fi Shooter"
  }
];
function App() {
  const [highScores, setScores] = useState(INITIAL_SCORES);
  const [filterCategory, setFilterCategory] = useState('All');

  const addHighScoreHandler = (highScore) => {
    setScores((prevScores) => [highScore, ...prevScores]);
  };

  const filterChangeHandler = (selectedCategory) => {
    setFilterCategory(selectedCategory);
  };

  const filteredHighScores = highScores.filter((highScore) => {
    if (filterCategory === 'All') {
      return true;
    }

    return highScore.category === filterCategory;
  });


  return (
    <div>
      <h1>Retro Leaderboard</h1>
      <NewScoreForm onAddScore={addHighScoreHandler}/>
      <div className = "card">
        <CategoryFilter onChangeFilter={filterChangeHandler} selected={filterCategory} />
      </div>
      <LeaderboardList items = {filteredHighScores} category = {filterCategory} />
    </div>
    
  );
}

export default App
