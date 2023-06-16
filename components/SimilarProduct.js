import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

function SimilarProduct({ _id, name, category, pictures }) {
  return (
    <LinkContainer
      to={`/product/${_id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card className="similar-product-card">
        <div className="similar-product-img-container">
          <Card.Img
            variant="top"
            className="similar-product-img"
            src={pictures[0].url}
          />
        </div>
        <Card.Body className="similar-product-body">
          <Card.Title className="similar-product-title">{name}</Card.Title>
          <Badge bg="warning" className="similar-product-category">
            {category}
          </Badge>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default SimilarProduct;

<style>
  {`
  .similar-product-card {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  .similar-product-card:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .similar-product-img-container {
    flex-grow: 1;
    overflow: hidden;
  }

  .similar-product-img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .similar-product-body {
    padding: 1rem;
  }

  .similar-product-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .similar-product-category {
    font-size: 0.9rem;
    padding: 0.2rem 0.5rem;
  }
  `}
</style>