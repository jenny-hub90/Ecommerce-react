import {useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";


const ProductScreen = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  
  useEffect(()=> {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);

  const productName = {
    fontFamily: "Noto Serif Makasar, serif",
    color: "#595959",
    textTransform: "Uppercase",
  };
  const productPrice = {
    // fontFamily: 'Shadows Into Light, cursive',
    fontFamily: "Cardo, serif",
    fontSize: "20px",
  };
  const buttonStyle = {
    backgroundColor: "#DBDFEA",
    fontFamily: "Cardo, serif",
    color: "#000",
    transition: "background-color 0.3s",
    border:"none"
  };
  const buttonHoverStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  
  return (
    
    <>
      <Link
        className="btn btn-light my-3"
        to="/"
        style={
          isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Go Back
      </Link>
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
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
