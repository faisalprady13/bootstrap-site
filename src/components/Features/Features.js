import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Logo from "../../assets/img/Navigation/logo.svg";
import { Zoom } from "react-reveal";
const Features = () => {
  const SingleFeature = () => {
    return (
      <div className="flex-item">
        <Zoom>
          <Card className="card">
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
          </Card>
        </Zoom>
      </div>
    );
  };

  return (
    <section className="features wave-wrapper">
      <div className="wave"></div>
      <Container className="center-me flex-parent">
        <SingleFeature />
        <SingleFeature />
        <SingleFeature />
      </Container>
    </section>
  );
};

export default Features;
