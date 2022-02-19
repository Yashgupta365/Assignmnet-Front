import React from "react";
import { Card, CardImg } from "react-bootstrap";

const Products = ({ news }) => {
  console.log(news);
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${news._id}`}>
        <CardImg src={news.imageCover} variant="top"></CardImg>
      </a>
      <Card.Body>
        <a href={`/product/${news._id}`}>
          <Card.Title as="div">
            <strong>{news.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Body>
        <Card.Title as="h5" className="">
          {news.summary}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Products;
