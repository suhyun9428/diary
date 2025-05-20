import { useReducer, useRef, createContext, useState } from 'react'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

// const mockData = [
//   {
//     id : 1,
//     createdDate : new Date('2025-02-28').getTime(),
//     emotionId : 1,
//     content : '1번 일기 오늘은 2월 28일 아이 추워~ 1번 일기 오늘은 2월 28일 아이 추워~  1번 일기 오늘은 2월 28일 아이 추워~ 1번 일기 오늘은 2월 28일 아이 추워~ 1번 일기 오늘은 2월 28일 아이 추워~'
//   },
//   {
//     id : 2,
//     createdDate : new Date('2025-03-15').getTime(),
//     emotionId : 2,
//     content : '2번 일기 오늘은 3월 15일~'
//   },
//   {
//     id : 3,
//     createdDate : new Date('2025-04-19').getTime(),
//     emotionId : 3,
//     content : '3번 일기 4월 19일~ 깡총깡총'
//   },
//   {
//     id : 4,
//     createdDate : new Date('2025-05-15').getTime(),
//     emotionId : 4,
//     content : '4번 일기 5월 15일 목요일 비가 와서 추움~~'
//   },
//   {
//     id : 5,
//     createdDate : new Date('2025-05-11').getTime(),
//     emotionId : 5,
//     content : '5번 일기 내용 5월 11일 일요일 짱 월요일 오지마라'
//   }
// ];

const reducer = (state, action) => {
  let nextState;

  switch(action.type) {
    case 'INIT' : 
      return action.data;
    case 'CREATE' : 
      nextState = [action.data, ...state];
      break; 
    case 'UPDATE' : 
      {
        nextState = state.map(
          (item) => String(item.id) === String(action.data.id) 
            ? action.data : item
        );
        break;
      }
    case 'DELETE' : 
    {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    };
    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if(!storedData){
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);

    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    };

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId ){
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type : 'INIT',
      data : parsedData,
    });

    setIsLoading(false);
  }, []);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:'CREATE',
      data:{
        id:idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type : 'UPDATE',
      data:{
        id, createdDate, emotionId, content,
      }
    })
  };

  const onDelete = (id) => {
    dispatch({
      type:'DELETE',
      id,
    })
  };

  if(isLoading){
    return(<div>데이터 로딩중</div>)
  }
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="/diary/:id" element={<Diary />}/>
          <Route path="/edit/:id" element={<Edit />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  )
}

export default App;
