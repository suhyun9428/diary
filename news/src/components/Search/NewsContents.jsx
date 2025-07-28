import error_img from "../../assets/image__error.png";

const NewsContents = ({ article }) => {
  const onErrorImg = (e) => {
    e.target.src = error_img;
  };

  return (
    <ul className="list__filter">
      {article.map((item, idx) => {
        return (
          <li className="list-item" key={idx}>
            <em className="text__ranking">{idx + 1}.</em>
            <p className="text__title">{item.title}</p>
            <img
              className="image"
              src={item.image}
              alt=""
              onError={onErrorImg}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NewsContents;
