// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <heaader>
      <div className="navbar">
        <div className="nav-score">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div className="nav-score">
          <p className="nav-score-p">Score: {score}</p>
          <p className="nav-score-p">Top Score: {topScore}</p>
        </div>
      </div>
    </heaader>
  )
}

export default NavBar
