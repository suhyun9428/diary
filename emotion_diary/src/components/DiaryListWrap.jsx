import { useState } from "react";
import DiaryFilter from './DiaryFilter';
import DiaryList from './DiaryList';

const DiaryListWrap = ({data}) => {
  const [sortType, setSortType] = useState('latest');
  const handleSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) =>{
      if(sortType === 'oldest'){
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  const sortedData = getSortedData();

  return(
    <div className="box__diary-content">
      <DiaryFilter handleSortType={handleSortType} sortType={sortType}/>
      <DiaryList sortedData={sortedData}/>
    </div>
  )
}
export default DiaryListWrap;
