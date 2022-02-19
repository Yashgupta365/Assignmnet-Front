import React from "react";
import Product from "../components/Products";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await axios.get("/api/v1/news");
      setNews(data.doc);
    };
    fetchNews();
  }, []);

  return (
    <>
      <h1>Latest News</h1>
      <Row>
        {news.map((ne) => (
          <Col sm={12} md={6} lg={4} xl={12}>
            <Product news={ne}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
