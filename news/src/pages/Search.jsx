import { useState, useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { translateText } from "../utils/translateText";
import { selectedKeyword } from "../components/atom/atom";
import SearchBar from "../components/Search/SearchBar";
import RecentSearchHistory from "../components/Search/RecentSearchHistory";
import Sorting from "../components/Search/Sorting";
import NewsContents from "../components/Search/NewsContents";

const Search = () => {
  const [articles, setArticles] = useState([]);
  const [translatedArticles, setTranslatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useAtom(selectedKeyword);
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

    console.log(keyword, "changed?");

    fetchNews();
  }, [keyword]);

  return (
    <>
      <div className="box__search">
        <div className="box__search-inner">
          <SearchBar />
          <RecentSearchHistory />
          <Sorting />
        </div>
        <div className="box__filter-contents">
          <NewsContents article={translatedArticles} />
        </div>
      </div>
    </>
  );
};

export default Search;
