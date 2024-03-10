import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=37eaf926a0bc4bfa93115207d03597de`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data?.articles);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  console.log(articles);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>loading...</h1>;
  }

  return (
    <div>
      <h2 classNameName="text-center">
        Latest <span classNameName="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
