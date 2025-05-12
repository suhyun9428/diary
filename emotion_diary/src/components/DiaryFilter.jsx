import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryFilter = ({handleSortType, sortType}) => {
  const nav = useNavigate();
  
  return(
    <div className="box__diary-filter">
      <select className="form__filter" onChange={handleSortType} value={sortType}>
        <option value={"latest"}>최신순</option>
        <option value={"oldest"}>오래된순</option>
      </select>
      <Button onClick={() => {nav('/new')}} text={"새 일기 작성"} type="CREATE"/>
    </div>
  );
}
export default DiaryFilter;
