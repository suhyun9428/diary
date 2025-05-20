import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from '../util/get_stringed_date';
import useTitle from '../hooks/useTitle';

const Diary = ()=>{
  const params = useParams();
  const nav = useNavigate();
  const currentDiaryItem = useDiary(params.id);
  useTitle(`${params.id}번 일기`);

  if(!currentDiaryItem){
    return <div>데이터 로딩중</div>
  }

  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <>
      <Header 
        title={`${title} 기록`} 
        leftChiild={<Button text={'뒤로가기'} type="LEFT" onClick={() => nav(-1)} />}
        rightChiild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </>
  )
};

export default Diary;