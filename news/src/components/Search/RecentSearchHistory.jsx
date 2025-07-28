import { useAtom } from "jotai";
import { selectedKeyword } from "../atom/atom";

const dummyData = ["technology", "Trump", "Business", "AI", "coin"];

const RecentSearchHistory = () => {
  const [newKeyword, setNewKeyword] = useAtom(selectedKeyword);

  return (
    <div className="box__recent">
      <p className="for-a11y">최근 검색어</p>
      <ul className="list__recent">
        {dummyData.map((item, idx) => {
          return (
            <li key={idx} className="list-item">
              <button
                type="button"
                className="button__recent"
                onClick={() => setNewKeyword(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentSearchHistory;
