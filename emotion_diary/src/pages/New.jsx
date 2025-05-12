import Header from "../components/Header";
import Editor from "./Editor";
import Button from '../components/Button';

const New = ()=>{
  return (
    <>
      <Header title={"새 일기 작성"} leftChiild={<Button text={'뒤로가기'} type="LEFT"/>}/>
      <Editor/>
    </>
  )
};

export default New;