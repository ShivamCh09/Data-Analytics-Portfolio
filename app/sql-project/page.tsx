import { Container, Row, Col, Image } from 'react-bootstrap';

export default function SqlProject() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">Birthweight Analysis</h1>
          <p className="lead">
            This project involved statistical modeling to analyze the impact of smoking and other maternal factors on newborn birth weight.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-5">
        <Col md={10}>
          <Image src="/Picture1.png" alt="Birthweight Analysis Graph" fluid rounded />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Project Overview</h2>
          <p>
            The primary goal of this analysis was to identify key factors influencing the weight of a newborn. By leveraging statistical tests and regression models in R, I examined a dataset containing various maternal health metrics and habits.
          </p>
          <h2>Key Findings</h2>
          <p>
            The analysis revealed a statistically significant correlation between maternal smoking and lower birth weight. Other factors such as maternal age and height also showed an impact. The visualization above graphically represents the relationship between these variables.
          </p>
          <h2>Tools Used</h2>
          <ul>
            <li>R (for statistical analysis and modeling)</li>
            <li>ggplot2 (for data visualization)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
