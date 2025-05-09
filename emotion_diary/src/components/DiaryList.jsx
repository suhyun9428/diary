import Button from "./Button";
import {getEmotionImage} from '../util/emotion_image';

const DiaryList = () => {
  const emotionId = 1;

  return(
    <div className="box__diary-list">
      <ul className="list__diary">
        <li className="list-item">
          <div className={`box__image box__image${emotionId}`}>
            <img className="image" src={getEmotionImage(1)} alt="기분 좋음"/>
          </div>
          <div className="box__info">
            <p className="text__date">{new Date().toLocaleDateString()}</p>
            <p className="text__context">일기 내용입니당 일기 내용입니당일기 내용입니당일기 내용입니당일기 내용입니당일기 내용입니당</p>
          </div>
          <div className="box__button-wrap">
            <Button text={"🖋"} />
          </div>
        </li>
      </ul>
    </div>
  )
}
export default DiaryList;
