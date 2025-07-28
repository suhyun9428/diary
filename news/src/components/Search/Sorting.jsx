const dummyData = [
  {
    text: "최신순",
    id: "recent",
  },
  {
    text: "정확도순",
    id: "correct",
  },
  {
    text: "인기순",
    id: "rating",
  },
];

const Sorting = () => {
  return (
    <div className="box__sorting-wrap">
      {dummyData.map((item, idx) => {
        return (
          <div className="box__sorting" key={`sorting-${idx}`}>
            <input
              className="form__sorting"
              type="radio"
              id={item.id}
              name="sorting"
              onChange={() => console.log(item.id, "id!")}
            />
            <label htmlFor={item.id} className="text__sorting">
              {item.text}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Sorting;
