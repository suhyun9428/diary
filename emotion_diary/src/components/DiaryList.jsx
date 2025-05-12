import DiaryItem from "./DiaryItem";

const DiaryList = ({ sortedData }) => {
  return(
    <div className="box__diary-list">
      <ul className="list__diary">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
      </ul>
    </div>
  );
};

export default DiaryList;