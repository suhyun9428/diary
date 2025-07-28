import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Home/Banner";
import ArticleContents from "../components/Home/ArticleContents";
import Pagination from "../components/Home/Pagination";
import { translateText } from "../utils/translateText";
import { useAtom } from "jotai";
import { homePagination } from "../components/atom/atom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [translatedArticles, setTranslatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const pageSize = 5;
  const [page, setPage] = useAtom(homePagination);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/top-headlines",
          {
            params: {
              lang: "en",
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
  }, [page]);

  if (loading) return <div>뉴스 로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="box__home">
      <div className="box__home-inner">
        <Banner />
        <ArticleContents articles={translatedArticles} />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
