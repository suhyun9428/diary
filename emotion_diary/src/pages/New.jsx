import Header from "../components/Header";
import Editor from "./Editor";
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
const New = ()=>{
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', {replace : true});
  };

  return (
    <>
      <Header title={"새 일기 작성"} leftChiild={<Button text={'뒤로가기'} type="LEFT" onClick={() => nav(-1)}/>}/>
      <Editor onSubmit={onSubmit} />
    </>
  )
};

export default New;