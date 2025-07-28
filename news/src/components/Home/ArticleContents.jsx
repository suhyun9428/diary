import error_img from "../../assets/image__error.png";

const ArticleContents = ({ articles }) => {
  const onErrorImg = (e) => {
    e.target.src = error_img;
  };

  return (
    <ul className="list__news">
      {articles.map((item, idx) => (
        <li key={idx} className="list-item">
          {item.image && (
            <img
              src={item.image}
              alt="뉴스 이미지"
              className="image"
              onError={onErrorImg}
            />
          )}
          <p className="text__title">{item.title}</p>
          <span className="text__content">{item.content}</span>
        </li>
      ))}
    </ul>
  );
};

export default ArticleContents;
