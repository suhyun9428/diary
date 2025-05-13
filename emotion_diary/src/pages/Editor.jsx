import Button from '../components/Button';
import EmotionItem from './EmotionItem';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const emotionList = [
  {
    emotionId:1,
  },
  {
    emotionId:2,
  },
  {
    emotionId:3
  },
  {
    emotionId:4
  },
  {
    emotionId:5
  }
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if(month < 10){
    month = `0${month}`;
  }
  if(date < 10){
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}

const Editor = ({ initData, onSubmit }) =>{
  const [input, setInput] = useState({
    createdDate : new Date(),
    emotionId : 3,
    content : '',
  });
  const onChangeInput = (e) => {
    // console.log(e.target.name, e.target.value);

    let name = e.target.name;
    let value = e.target.value;

    if(name === 'createdDate'){
      value = new Date(value);
    }
    setInput({
      ...input,
      [name] : value,
    })
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  }
  const nav = useNavigate();

  useEffect(() => {
    if(initData){
      setInput({
        ...initData,
        createdDate : new Date(Number(initData.createdDate))
      })
    }
  }, [initData]);

  return(
    <>
      <div className="box__edit-content">
        <div className="box__section box__date">
          <p className="text">오늘의 날짜</p>
          <input type="date" className="form__date" name="createdDate" value={getStringedDate(input.createdDate)} onChange={onChangeInput} />
        </div>
        <div className="box__section box__emotion">
          <p className="text">오늘의 감정</p>
            <div className='box__cards-wrap'>
              {emotionList.map((item, idx) => {
                return(
                  <EmotionItem key={idx} {...item} isSelected={item.emotionId === input.emotionId} onClick={()=>{onChangeInput({
                    target:{
                      name : 'emotionId',
                      value : item.emotionId,
                    }
                  })}} />
                )
              })}
            </div>
        </div>
        <div className="box__section box__contents">
          <p className='text'>오늘의 일기</p>
          <textarea placeholder='오늘은 어땠나요?' className='form__diary-content' name='content' value={input.content} onChange={onChangeInput}/>
        </div>
        <div className="box__section box__button-wrap">
          <Button text={'취소하기'} onClick={()=>nav(-1)}/>
          <Button text={'작성완료'} type={'CONFIRM'} onClick={onClickSubmitButton} />
        </div>
      </div>
    </>
  )
}

export default Editor;