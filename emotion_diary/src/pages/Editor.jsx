import { getEmotionImage } from '../util/emotion_image';

const emotionList = [
  {
    emotionId:1,
    emotionName:'완전 좋음'
  },
  {
    emotionId:2,
    emotionName:'좋음'
  },
  {
    emotionId:3,
    emotionName:'보통'
  },
  {
    emotionId:4,
    emotionName:'나쁨'
  },
  {
    emotionId:5,
    emotionName:'끔찍함'
  }
]
const Editor = ()=>{
  console.log(emotionList, '/emotionList')
  return(
    <>
      <div className="box__edit-content">
        <div className="box__date">
          <p className="text">오늘의 날짜</p>
          <input type="date" className="form__date" />
        </div>
        <div className="box__emotion">
          <p className="text">오늘의 감정</p>
            <div className='box__cards-wrap'>
              {emotionList.map((item, idx) => {
                const {emotionId, emotionName} = item || {};
                const {src , alt} = getEmotionImage(emotionId) || {};
                return(
                  <div className='box__emotion-card' key={idx}>
                    <img className="image" src={src} alt={alt} />
                    <p>{alt}</p>
                  </div>
                )}
              )}
            </div>
        </div>
        <div className="box__contents"></div>
        <div className="box__button-wrap"></div>
      </div>
    </>
  )
}
export default Editor;