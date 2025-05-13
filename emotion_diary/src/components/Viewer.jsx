import { getEmotionImage } from "../util/emotion_image";
const Viewer = () => {
  const emotionId = 2;

  return(
    <div className="box__viewer">
      <p className="text">오늘의 감정</p>
      <div className="box__emotion-area">
        <img src={getEmotionImage(emotionId).src} alt="" />
        <p>그럭저럭</p>
      </div>
      <div className="box__text-area">
        <p className="text">오늘의 일기</p>
        <textarea className="form__textarea" />
      </div>
    </div>
  )
}
export default Viewer;