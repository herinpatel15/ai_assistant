import React, { useEffect, useState } from "react";
import axios from "axios";

import "./news.css"
import lodIcon from "../../assets/svgs/lod.svg"

function News() {
  const [newsData, setNewsData] = useState([]);
  const [lod, setLod] = useState(true)

  const newsFetch = async () => {
    try {
      setLod(true)
      const response = await axios.get("https://ai-assistant-api-learn.vercel.app/api/news");
      setNewsData(response.data);
      setLod(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    newsFetch();
  }, []);

  return (
    <main className="main-news">
      {lod === true 
        ? <div className="loader"><img src={lodIcon} alt="hello" /></div> 
        : newsData.map(val => {
            if (val.title !== "[Removed]" && val.urlToImage !== null) {
              return <div className='news-box'>
              <img src={val.urlToImage} alt="hello" />
              <h1>{val.title}</h1>
              <a style={{color: "var(--main-color)", marginTop: "20px"}} href={val.url}>Learn More</a>
            </div>
            }
          })
      }
    </main>
  );
}

export default News;
