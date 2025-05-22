import { useState, useEffect } from "react";
import axios from "axios";
import { translateText } from "../utils/translateText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

const dummyData = [
  '기술', '대선', '미중전쟁', '트럼프', '산불', 'AI', '코인'
];



const Search = () => {
  const [articles, setArticles] = useState([]);
  const [translatedArticles, setTranslatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  }, []);

  return(
    <>
      <div className="box__search">
        <input type="text" placeholder="?" className="form__keyword" />
        <button type="submit" className="button__search">검색</button>
      </div>
      <div className="box__recent">
        <p className="text__recent">최근 검색어</p>
        <Swiper
          className="list__recent"
          modules={[Scrollbar]}
          slidesPerView="auto"
        >
          {dummyData.map((item, idx) => {
            return(
              <SwiperSlide key={idx} className='list-item'>
                <button type="button" className="button__recent">{item}</button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="box__sorting-wrap">
        <div className="box__sorting">
          <input className="form__sorting" type="radio" id="recent" name="sorting" />
          <label htmlFor="recent" className="text__sorting">최신순</label>
        </div>
        <div className="box__sorting">
          <input className="form__sorting" type="radio" id="correct" name="sorting" />
          <label htmlFor="correct" className="text__sorting">정확도순</label>
        </div>
        <div className="box__sorting">
          <input className="form__sorting" type="radio" id="rating" name="sorting" />
          <label htmlFor="rating" className="text__sorting">인기순</label>
        </div>
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
    </>
  )
}

export default Search;