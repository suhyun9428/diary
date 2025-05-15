import Button from '../components/Button';
import EmotionItem from './EmotionItem';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/get_stringed_date';


const Editor = ({ initData, onSubmit }) =>{
  const [input, setInput] = useState({
    createdDate : new Date(),
    emotionId : 3,
    content : '',
  });
  const onChangeInput = (e) => {
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
  };
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
          <p className="text" id="form__date">오늘의 날짜</p>
          <input type="date" className="form__date" name="createdDate" value={getStringedDate(input.createdDate)} onChange={onChangeInput} aria-describedby='form__date'/>
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