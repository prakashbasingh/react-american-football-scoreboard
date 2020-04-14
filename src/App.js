//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0)
// const [homeFieldScore, setHomeFieldScore] = useState(0)

const [awayScore, setAwayScore] = useState(0)
// const [awayFieldScore, setAwayFieldScore] = useState(0)

const [homeTeam, setHomeTeam] =  useState('49er')
const [awayTeam, setAwayTeam] = useState('raven')
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {event => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {event => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {event => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {event => setAwayScore(awayScore + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;