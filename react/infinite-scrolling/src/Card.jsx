/* eslint-disable react/prop-types */

import { Button, Card, Col } from "react-bootstrap";

function ProductCard({ product }) {
  return (
    <Col md={4}>
      <Card className="mt-4">
        <Card.Img variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.description}</Card.Text>
          <Card.Text>{product?.price}</Card.Text>
          <Card.Text>{product?.category}</Card.Text>
          <Card.Text>{product?.brand}</Card.Text>
          <Button variant="primary" className="">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
