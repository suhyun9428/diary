import React, { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState("");

  const handleCategory = (e) => {
    e.preventDefault();
    console.log(e.target.value, 'val');
    setCategory(e.target.value)
  }
  return (
    <div className="box__filter">
      <div className="box__filter-buttons">
        <button type="button" className="button__filter" value="" onClick={handleCategory}>전체</button>
        <button type="button" className="button__filter" value="world" onClick={handleCategory}>세계</button>
        <button type="button" className="button__filter" value="business" onClick={handleCategory}>경제</button>
        <button type="button" className="button__filter" value="technology" onClick={handleCategory}>기술</button>
        <button type="button" className="button__filter" value="entertainment" onClick={handleCategory}>엔터</button>
        <button type="button" className="button__filter" value="sports" onClick={handleCategory}>스포츠</button>
        <button type="button" className="button__filter" value="science" onClick={handleCategory}>과학</button>
        <button type="button" className="button__filter" value="health" onClick={handleCategory}>건강</button>
      </div>
      <div className="box__filter-contents">
        <ul className="list__filter">
          <li className="list-item">
            <p className="text__title">타이틀</p>
          </li>
          <li className="list-item">
            <p className="text__title">타이틀</p>
          </li>
          <li className="list-item">
            <p className="text__title">타이틀</p>
          </li>
          <li className="list-item">
            <p className="text__title">타이틀</p>
          </li>
          <li className="list-item">
            <p className="text__title">타이틀</p>
          </li>
          </ul>
      </div>
    </div>    
  );
};



export default Filter;