import { useAtom } from "jotai";
import { homePagination } from "../atom/atom";

const Pagination = () => {
  const [page, setPage] = useAtom(homePagination);
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="box__pagination">
      <button
        className="button__pagination button__prev"
        onClick={prevPage}
        disabled={page === 1}
      >
        <span className="for-a11y">이전</span>
      </button>
      <span className="text__current-page">{page}</span>
      <button className="button__pagination button__next" onClick={nextPage}>
        <span className="for-a11y">다음</span>
      </button>
    </div>
  );
};

export default Pagination;
