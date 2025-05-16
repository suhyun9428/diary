const Filter = () => {
  return(
    <div className="box__filter">
      <div className="box__filter-buttons">
        <button type="button" className="button__filter">정치</button>
        <button type="button" className="button__filter">경제</button>
        <button type="button" className="button__filter">사회</button>
        <button type="button" className="button__filter">엔터</button>
        <button type="button" className="button__filter">세계</button>
        <button type="button" className="button__filter">IT/과학</button>
      </div>
      <div className="box__filter-contents">
        <ul>
          <li>
            <p>타이틀</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Filter;