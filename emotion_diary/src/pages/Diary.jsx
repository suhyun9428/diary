import { useParams } from "react-router-dom";

const Diary = ()=>{
  const params = useParams();
  return <p>Diary : {params.id}번 일기</p>
};

export default Diary;