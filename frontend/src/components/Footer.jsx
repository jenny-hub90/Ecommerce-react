import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const fontstyle = {
        fontFamily: "Caprasimo, cursive",
    }
   
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3' style={fontstyle}>
                    <p>Kasa &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer