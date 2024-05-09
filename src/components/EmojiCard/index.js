// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {list, emojiClicked} = props
  const {id, emojiName, emojiUrl} = list
  console.log(id)
  const handleEmoji = () => {
    console.log(id)
    emojiClicked(id)
  }
  return (
    <li>
      <button onClick={handleEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
