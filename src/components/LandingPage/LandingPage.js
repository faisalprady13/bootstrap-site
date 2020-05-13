import React from "react";
import { Container, Row, Col, Image, Jumbotron, Button } from "react-bootstrap";
import Cooking from "../../assets/img/LandingPage/cooking.svg";

const LandingPage = () => {
  return (
    <Jumbotron className="hero">
      <Container>
        <Row>
          <Col className="align-self-center">
            <h1 className="mb-3">Hey You!</h1>
            <p className="mb-4">
              You look soo hangry, let's cook a magnificent food for your tummy!
            </p>
            <Button>Kuy!</Button>
          </Col>
          <Col>
            <Image src={Cooking} fluid />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default LandingPage;
