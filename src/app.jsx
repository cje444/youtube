import styles from "./app.module.css";
import { useEffect, useState } from "react";
import VideoList from "./component/video_list/video_list";
import SearchHeader from "./component/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); //초기값은 빈배열
  const search = (query) => {
    youtube //
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube //
      .mostPopular() //
      .then((videos) => setVideos(videos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //[]배열안의 내용이 업데이트 될때마다 useEffect가 호출됨

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
