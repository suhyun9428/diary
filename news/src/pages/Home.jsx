import { useEffect, useState } from "react";
import axios from "axios";
import Banner from '../components/Banner';
import { translateText } from "../utils/translateText";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [translatedArticles, setTranslatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const pageSize = 5;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
          params: {
            lang: "en",
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
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  if (loading) return <div>뉴스 로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Banner />
      <ul className="list__news">
        {translatedArticles.map((item, idx) => (
          <li key={idx} className="list-item">
            {item.image && <img src={item.image} alt="뉴스 이미지" className="image" />}
            <p className="text__title">{item.title}</p>
            <span className="text__content">{item.content}</span>
          </li>
        ))}
      </ul>
      <div className="box__pagination">
        <button className="button__pagination" onClick={prevPage} disabled={page === 1}><span className="for-a11y">이전</span></button>
        <span className="text__current-page">{page}</span>
        <button className="button__pagination" onClick={nextPage}><span className="for-a11y">다음</span></button>
      </div>
    </>
  );
};

export default Home;
