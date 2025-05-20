import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "./Editor";
import Button from "../components/Button";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import useTitle from '../hooks/useTitle';

const Edit = () =>{
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);
  useTitle(`${params.id}번 일기 수정`);
  
  const onClickDelete = () => {
    if(window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')){
      // 일기 삭제 로직
      onDelete(params.id);
      nav('/', {replace:true});
    }
  };

  const onSubmit = (input) => {
    if(window.confirm('일기를 정말 수정할까요?')){
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
    }
    nav('/', {replace:true});
  }
  return (
    <>
      <Header 
        title={"일기 수정하기"} 
        leftChiild={<Button text={'뒤로가기'} type="LEFT" onClick={() => nav(-1)} />}
        rightChild = {<Button text={'삭제하기'} type="CANCEL" onClick={onClickDelete} />}
        />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </>
  )
};

export default Edit;