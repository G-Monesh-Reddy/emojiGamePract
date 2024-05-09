import './index.css'

const WinOrLoseCard = props => {
  const {topScore, score, playAgainButton} = props
  const handlePlayAgain = () => {
    playAgainButton()
  }
  return (
    <div>
      {score >= 12 ? (
        <div>
          <header>
            <div className="navbar">
              <div className="nav-score">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                  alt="emoji logo"
                />
                <h1>Emoji Game</h1>
              </div>
            </div>
          </header>
          <div className="card">
            <div>
              <h1>You Won</h1>
              <p>Best Score</p>
              <p>12/12</p>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <header>
            <div className="navbar">
              <div className="nav-score">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                  alt="emoji logo"
                />
                <h1>Emoji Game</h1>
              </div>
            </div>
          </header>
          <div className="card">
            <div>
              <h1>You Lose</h1>
              <p>Score</p>
              <p>{score}/12</p>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
