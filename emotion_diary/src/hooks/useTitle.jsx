import { useEffect } from "react";

const useTitle = (title) => {
  return(
    useEffect(() => {
      // DOM 요소 저장용 $ 이름
      const $title = document.getElementsByTagName('title')[0];
      $title.innerText = title;
    }, [title])
  )
}

export default useTitle;