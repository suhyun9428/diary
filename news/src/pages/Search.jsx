import { useState, useEffect } from "react";
import axios from "axios";
import { translateText } from "../utils/translateText";

const dummyData = ["기술", "대선", "미중전쟁", "트럼프", "산불", "AI", "코인"];

const SearchBar = ({ keyword }) => {
  console.log(keyword, "origin keyword");
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
    console.log(inputVal, "inputVal onchange");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal, "inputVal");
    // setInputVal(keyword);
  };

  return (
    <form className="box__search-bar" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="뉴스 검색"
          className="form__keyword"
          value={inputVal}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="button__search">
        검색
      </button>
    </form>
  );
};
const RecentSearchHistory = () => {
  return (
    <div className="box__recent">
      <p className="for-a11y">최근 검색어</p>
      <ul className="list__recent">
        {dummyData.map((item, idx) => {
          return (
            <li key={idx} className="list-item">
              <button type="button" className="button__recent">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const NewsContents = ({ article }) => {
  return (
    <ul className="list__filter">
      {article.map((item, idx) => {
        return (
          <li className="list-item" key={idx}>
            <em className="text__ranking">{idx + 1}.</em>
            <p className="text__title">{item.title}</p>
            <img className="image" src={item.image} alt="" />
          </li>
        );
      })}
    </ul>
  );
};

const Search = () => {
  const [articles, setArticles] = useState([]);
  const [translatedArticles, setTranslatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("yap");
  const [page, setPage] = useState(1);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const pageSize = 5;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/top-headlines",
          {
            params: {
              lang: "en",
              q: keyword || undefined,
              max: pageSize,
              page: page,
              token: apiKey,
            },
          }
        );

        const data = response.data.articles || [];
        setArticles(data);

        const translated = await Promise.all(
          data.map(async (item) => {
            const title = await translateText(item.title);
            const content = await translateText(
              item.content || item.description || ""
            );
            return {
              ...item,
              title,
              content,
            };
          })
        );
        setTranslatedArticles(translated);
      } catch (err) {
        console.error(err);
        setError("뉴스를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="box__search">
        <div className="box__search-inner">
          <SearchBar keyword={keyword} />
          <RecentSearchHistory />
          <div className="box__sorting-wrap">
            <div className="box__sorting">
              <input
                className="form__sorting"
                type="radio"
                id="recent"
                name="sorting"
              />
              <label htmlFor="recent" className="text__sorting">
                최신순
              </label>
            </div>
            <div className="box__sorting">
              <input
                className="form__sorting"
                type="radio"
                id="correct"
                name="sorting"
              />
              <label htmlFor="correct" className="text__sorting">
                정확도순
              </label>
            </div>
            <div className="box__sorting">
              <input
                className="form__sorting"
                type="radio"
                id="rating"
                name="sorting"
              />
              <label htmlFor="rating" className="text__sorting">
                인기순
              </label>
            </div>
          </div>
        </div>
        <div className="box__filter-contents">
          <NewsContents article={translatedArticles} />
        </div>
      </div>
    </>
  );
};

export default Search;
