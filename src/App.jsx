import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
// import { Counter } from "./components/Counter/Counter";

//Utitlizando outra conta no github

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const newsData = response.data;

      console.log(newsData);
      setNews(newsData);
    }
    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      {/* <Counter /> */}

      <section id="articles">
        {news.length === 0 ? (
          
          <div style={{ height: '400x', width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <ThreeDots
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                url={article.url}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.imageUrl}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
