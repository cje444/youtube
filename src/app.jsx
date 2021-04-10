import styles from "./app.module.css";
import { useEffect, useState } from "react";
import VideoList from "./component/video_list/video_list";
import SearchHeader from "./component/search_header/search_header";

function App() {
  const [videos, setVideos] = useState([]); //초기값은 빈배열
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDCQBFYD9fDpFiRyZ-fXH108l5yZeBcQpQ&part=snippet&maxResults=25&q=${query}&type=video&=AIzaSyDCQBFYD9fDpFiRyZ-fXH108l5yZeBcQpQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDCQBFYD9fDpFiRyZ-fXH108l5yZeBcQpQ&part=snippet&chart=mostPopular&maxResults=25&=AIzaSyDCQBFYD9fDpFiRyZ-fXH108l5yZeBcQpQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));

    console.log("useEffect");
  }, []); //[]배열안의 내용이 업데이트 될때마다 useEffect가 호출됨

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
