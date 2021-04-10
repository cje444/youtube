import "./App.css";
import { useEffect, useState } from "react";
import VideoList from "./component/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]); //초기값은 빈배열

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

  return <VideoList videos={videos} />;
}

export default App;
