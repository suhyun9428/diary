import { useState, useEffect } from "react";
import axios from "axios";
import { translateText } from "../utils/translateText";
const valueArray = [
  {
    value : '',
    title : '전체'
  },
  {
    value : 'world',
    title : '세계'
  },
  {
    value : 'business',
    title : '경제'
  },
  {
    value : 'technology',
    title : '기술'
  },
  {
    value : 'entertainment',
    title : '엔터'
  },
  {
    value : 'sports',
    title : '스포츠'
  },
  {
    value : 'science',
    title : '과학'
  },
  {
    value : 'health',
    title : '건강'
  }
]
const Filter = () => {
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);
  const [translatedArticles, setTranslatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState();

  const handleCategory = (e) => {
    e.preventDefault();
    console.log(e.target.value, 'val');
    setCategory(e.target.value)
    // setActive()
  };

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const pageSize = 5;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
          params: {
            lang: "en",
            topic: category || undefined,
            q: keyword || undefined,
            max: pageSize,
            page: page,
            token: apiKey,
          },
        });

        const data = response.data.articles || [];
        setArticles(data);

        const translated = await Promise.all(
          data.map(async (item) => {
            const title = await translateText(item.title);
            const content = await translateText(item.content || item.description || "");
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
  }, [category]);
// button__filter--active
  return (
    <div className="box__filter">
      <div className="box__filter-buttons">
        {valueArray.map((item, idx)=>{
          return(
            <button key={idx} type="button" className="button__filter" value={item.value} onClick={handleCategory}>{item.title}</button>
          )
        })}
      </div>
      <div className="box__filter-contents">
        <ul className="list__filter">
          {translatedArticles.map((item, idx) => {
            return(
              <li className="list-item" key={idx}>
                <em className="text__ranking">{idx+1}.</em>
                <p className="text__title">{item.title}</p>
                <img className="image" src={item.image} alt="" />
              </li>
            )
          })}
          </ul>
      </div>
    </div>    
  );
};



export default Filter;