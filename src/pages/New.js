import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  // 페이지마다 고유의 id를 title에 입력할 수 있는 코드
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정일기장 - 새 일기`;
  }, []);
  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
