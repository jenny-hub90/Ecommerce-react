import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const cardStyle = {
    backgroundColor: "#DBDFEA",
  };
  const productCard = {
    color: "#595959",
  };
  const productName = {
    fontFamily: "Noto Serif Makasar, serif",
    color:"#595959",
    textTransform: "Uppercase",
  };
  const productPrice ={
    // fontFamily: 'Shadows Into Light, cursive',
    fontFamily: 'Cardo, serif',
    fontSize: "20px",
  }
  return (
    <Card className="my-3 py-3 rounded" style={cardStyle}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={productCard}>
          <Card.Title as="div" style={productName} class='product-title'>
            {product.name}
          </Card.Title>
        </Link>
        <Card.Text as='div' style={productPrice}>
            <Rating value={ product.rating } text={`${product.numReviews} reviews`}/>
        </Card.Text>
        <Card.Text as="h3" style={productPrice}>
          <strong>$ {product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
