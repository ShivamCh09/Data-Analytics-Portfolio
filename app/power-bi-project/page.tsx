import { Container, Row, Col, Image } from 'react-bootstrap';

export default function PowerBiProject() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">EV Market Analysis</h1>
          <p className="lead">
            This project focused on analyzing the efficiency and range of electric vehicles across different market segments using Power BI.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-5">
        <Col md={10}>
          <Image src="/Project/dashboard_1.png" alt="EV Market Analysis Dashboard" fluid rounded />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Project Overview</h2>
          <p>
            The objective of this analysis was to develop a comprehensive Power BI dashboard to visualize and explore the performance of various electric vehicles. The dashboard provides insights into efficiency, range, and other key metrics, allowing for easy comparison across different models and manufacturers.
          </p>
          <h2>Key Visualizations</h2>
          <ul>
            <li>Heatmaps showing the efficiency of different EV models.</li>
            <li>Bar charts comparing the range of vehicles by market segment.</li>
            <li>Interactive filters to drill down into specific manufacturers or vehicle types.</li>
          </ul>
          <h2>Tools Used</h2>
          <ul>
            <li>Power BI (for data visualization and dashboard creation)</li>
            <li>Excel (for data preparation)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
