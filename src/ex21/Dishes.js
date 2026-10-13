import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { dishes } from './data';

// trang Home: hien danh sach mon an, bam ten mon -> /dish/:id
export const DishList = () => {
  return (
    <Container>
      <div className="text-center my-2">Home</div>
      <Row className="g-4">
        {dishes.map((dish) => (
          <Col md={6} key={dish.id}>
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// chi tiet mon an theo id tren URL
export const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === Number(id));

  if (!dish) {
    return <h2 className="page">Không tìm thấy món ăn có id = {id}</h2>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={5}>
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
          </Card>
        </Col>
        <Col md={7}>
          <CardTitle tag="h2">
            {dish.name} {dish.label && <Badge color="danger">{dish.label}</Badge>}
          </CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>
            <b>Category:</b> {dish.category}
          </CardText>
          <CardText>
            <b>Price:</b> ${dish.price}
          </CardText>
          <Link to="/">← Back to menu</Link>
        </Col>
      </Row>
    </Container>
  );
};
