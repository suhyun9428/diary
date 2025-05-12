import { getEmotionImage } from '../util/emotion_image';

const EmotionItem = ({ emotionId, emotionName }) => {
  // console.log(emotionId, emotionName, "?")
  return(
    <div className='box__emotion-card'>
      <img className="image" src={getEmotionImage(emotionId)} alt={emotionName} />
      <p>{emotionName}</p>
    </div>
  )
}

export default EmotionItem;