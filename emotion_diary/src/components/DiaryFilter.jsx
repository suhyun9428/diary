import Button from "./Button";

const DiaryFilter = () => {
  return(
    <div className="box__diary-filter">
      <select className="form__filter">
        <option value={"latest"}>최신순</option>
        <option value={"oldest"}>오래된순</option>
      </select>
      <Button text={"새 일기 작성"} type="CREATE"/>
    </div>
  )
}
export default DiaryFilter;
