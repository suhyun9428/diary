import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App'
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryListWrap from '../components/DiaryListWrap';
import useTitle from '../hooks/useTitle';

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();

  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1, 0, 23, 59, 59).getTime();

  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
  useTitle('토끼 일기장');
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  };

  return (
    <>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
        leftChiild={<Button type="LEFT" onClick={onDecreaseMonth} text={"지난 달"} />}
        rightChild={<Button type="RIGHT" onClick={onIncreaseMonth} text={"다음 달"} />}
      />
      <DiaryListWrap data={monthlyData}/>
    </>
  )
};

export default Home;