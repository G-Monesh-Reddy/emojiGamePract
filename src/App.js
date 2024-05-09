import {Component} from 'react'

import NavBar from './components/NavBar'

import EmojiCard from './components/EmojiCard'

import WinOrLoseCard from './components/WinOrLoseCard'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojisList1: emojisList,
    startEmoji: null,
    verify: false,
    listScore: [],
  }

  emojiClicked = id => {
    this.setState(prevState => {
      const {
        score,
        topScore,
        emojisList1,
        startEmoji,
        listScore,

        verify,
      } = prevState
      let updatedScore = score
      const updatedTopScore = topScore
      let updatedEmojisList = emojisList1
      let updatedStartEmoji = startEmoji
      const updatedListScore = listScore
      let updateVerify = verify

      if (score === 0) {
        updatedStartEmoji = id
        updatedScore = 1
      } else if (id === startEmoji) {
        updatedListScore.push(score)

        updateVerify = true
      } else {
        updatedScore += 1
        updatedEmojisList = updatedEmojisList.sort(() => Math.random() - 0.5)
      }

      return {
        score: updatedScore,
        topScore: updatedTopScore,
        emojisList1: updatedEmojisList,
        startEmoji: updatedStartEmoji,
        listScore: updatedListScore,
        verify: updateVerify,
      }
    })
  }

  playAgainButton = () => {
    const {listScore} = this.state
    this.setState(prevState => ({
      verify: false,
      score: 0,
      topScore: Math.max(...listScore),
    }))
  }

  render() {
    const {score, topScore, emojisList1, verify} = this.state
    return (
      <div className="bg">
        {verify ? (
          <WinOrLoseCard
            topScore={topScore}
            playAgainButton={this.playAgainButton}
            score={score}
          />
        ) : (
          <div>
            <NavBar score={score} topScore={topScore} />
            <ul className="ul-lists">
              {emojisList1.map(each => (
                <EmojiCard
                  key={each.id}
                  list={each}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default App
