import Button from "./Button";
import { getEmotionImage } from '../util/emotion_image';
import { useNavigate } from "react-router-dom"; 

const DiaryItem = ({id, emotionId, createdDate, content})=>{
  const nav = useNavigate();

  return(
    <li className="list-item">
      <a href="#" className={`link__image link__image${emotionId}`} onClick={()=>nav(`/diary/${id}`)}>
        <img className="image" src={getEmotionImage(emotionId).src} alt={getEmotionImage(emotionId).alt}/>
      </a>
      <a className="link__info">
        <p className="text__date">{new Date(createdDate).toLocaleDateString()}</p>  
        <p className="text__context">{content}</p>
      </a>
      <div className="box__button-wrap">
        <Button text={"🖋"} onClick={() => nav(`/edit/${id}`)}/>
      </div>
    </li>
  )
}
export default DiaryItem;
