import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../assets/img/Navigation/logo.svg";
import { Zoom } from "react-reveal";
const Features = () => {
  const SingleFeature = () => {
    return (
      <Col sm={12} md={4} lg={3} className="mb-5">
        <Zoom>
          <Row>
            <Image src={Logo} width="100px" className="mx-auto my-3" />
          </Row>
          <Row>
            <Col>
              <p className="text-center my-3 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
          </Row>
        </Zoom>
      </Col>
    );
  };

  return (
    <section className="features">
      <Container className="py-2">
        <Row className="justify-content-around">
          <SingleFeature />
          <SingleFeature />
          <SingleFeature />
        </Row>
      </Container>
    </section>
  );
};

export default Features;
