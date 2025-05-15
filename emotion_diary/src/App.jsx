import { useReducer, useRef, createContext } from 'react'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { Routes, Route } from 'react-router-dom'

const mockData = [
  {
    id : 1,
    createdDate : new Date('2025-02-28').getTime(),
    emotionId : 1,
    content : '1번 일기 오늘은 2월 28일 아이 추워~ 1번 일기 오늘은 2월 28일 아이 추워~  1번 일기 오늘은 2월 28일 아이 추워~ 1번 일기 오늘은 2월 28일 아이 추워~ 1번 일기 오늘은 2월 28일 아이 추워~'
  },
  {
    id : 2,
    createdDate : new Date('2025-03-15').getTime(),
    emotionId : 2,
    content : '2번 일기 오늘은 3월 15일 광복절~'
  },
  {
    id : 3,
    createdDate : new Date('2025-04-19').getTime(),
    emotionId : 3,
    content : '3번 일기 4월 19일~ 깡총깡총'
  },
  {
    id : 4,
    createdDate : new Date('2025-05-15').getTime(),
    emotionId : 4,
    content : '4번 일기 5월 15일 목요일 비가 와서 추움~~'
  },
  {
    id : 5,
    createdDate : new Date('2025-05-11').getTime(),
    emotionId : 5,
    content : '5번 일기 내용 5월 11일 일요일 짱 월요일 오지마라'
  }
];

const reducer = (state, action) => {
  switch(action.type) {
    case 'CREATE' : 
      return [action.data, ...state];
    case 'UPDATE' : 
      return state.map((item) => 
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE' : 
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(6);

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
