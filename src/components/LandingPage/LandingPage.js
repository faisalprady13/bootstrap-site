import React from "react";
import { Container, Row, Col, Image, Jumbotron, Button } from "react-bootstrap";
import Cooking from "../../assets/img/LandingPage/cooking.svg";
import { Fade } from "react-reveal";

const LandingPage = () => {
  return (
    <Jumbotron className="hero mb-0">
      <Container>
        <Fade>
          <Row>
            <Col className="align-self-center text-center text-sm-center text-md-left">
              <h1 className="mb-3 ">Hey, You!</h1>
              <p className="mb-4">
                You look soo hangry, let's cook a magnificent food for your
                tummy!
              </p>
              <Button>Let's go</Button>
            </Col>
            <Col className="d-none d-sm-none d-md-block">
              <Image src={Cooking} fluid />
            </Col>
          </Row>
        </Fade>
      </Container>
    </Jumbotron>
  );
};

export default LandingPage;
