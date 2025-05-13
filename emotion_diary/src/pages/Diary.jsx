import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Diary = ()=>{
  const params = useParams();
  const nav = useNavigate();
  
  return (
    <>
      <Header 
        title={"yyyy-mm-dd 기록"} 
        leftChiild={<Button text={'뒤로가기'} type="LEFT" onClick={() => nav(-1)} />}
        rightChiild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </>
  )
};

export default Diary;