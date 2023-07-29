import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const { id: productId } = useParams();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}));
    navigate('/cart');
  }

  const productName = {
    fontFamily: "Noto Serif Makasar, serif",
    color: "#595959",
    textTransform: "Uppercase",
  };
  const productPrice = {
    fontFamily: "Cardo, serif",
    fontSize: "20px",
  };
  const buttonStyle = {
    backgroundColor: "#DBDFEA",
    fontFamily: "Cardo, serif",
    color: "#000",
    transition: "background-color 0.3s",
    border: "none",
  };
  const buttonHoverStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  const countInStockArray = product?.countInStock
    ? [...Array(product.countInStock).keys()]
    : [];

  console.log(countInStockArray);
  return (
    <>
      <Link
        className="btn btn-light my-3"
        to="/"
        style={buttonStyle}
      >
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 style={productName}>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item style={productPrice}>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item style={productPrice}>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item style={productPrice}>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush" style={productPrice}>
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty (Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    style={
                      isHovered
                        ? { ...buttonStyle, ...buttonHoverStyle }
                        : buttonStyle
                    }
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
