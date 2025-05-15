import { getEmotionImage } from '../util/emotion_image';

const EmotionItem = ({ emotionId, isSelected, onClick }) => {
  const {src , alt} = getEmotionImage(emotionId) || {};

  return(
    <button type='button' className={`button__emotion-card ${isSelected ? `button__emotion-card--selected` : ''}`} onClick={onClick} >
      <img className="image" src={src} alt={alt} />
    </button>
  )
}

export default EmotionItem;