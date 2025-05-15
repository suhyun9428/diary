import { getEmotionImage } from "../util/emotion_image";
import { emotionList } from '../util/constants';

const Viewer = ({emotionId, content}) => {
  const emotionItem = emotionList.find( (item) => String(item.emotionId) === String(emotionId));

  return(
    <div className="box__viewer">
      <p className="text__subtitle">오늘의 감정</p>
      <div className={`box__emotion-area box__emotion${emotionId}`}>
        <img className="image" src={getEmotionImage(emotionId).src} alt={emotionItem.emotionName} />
        <p className="text__emotion">{emotionItem.emotionName}</p>
      </div>
      <div className="box__text-area">
        <p className="text__subtitle">오늘의 일기</p>
        <div className="box__content">{content}</div>
      </div>
    </div>
  )
}
export default Viewer;