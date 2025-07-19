import { Container, Row, Col, Image } from 'react-bootstrap';

export default function PythonProject() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">Auto Sales Data Visualization</h1>
          <p className="lead">
            This project involved building interactive dashboards to analyze sales trends and customer demographics for an auto sales company.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-5">
        <Col md={10}>
          <Image src="/Screenshot 2025-03-07 152315.jpg" alt="Auto Sales Dashboard" fluid rounded />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Project Overview</h2>
          <p>
            The goal of this project was to create a comprehensive and interactive dashboard that would allow stakeholders to easily explore and understand auto sales data. By visualizing key performance indicators (KPIs), we can identify trends, spot anomalies, and make data-driven decisions.
          </p>
          <h2>Key Features</h2>
          <ul>
            <li>Sales performance tracking by region, model, and time period.</li>
            <li>Customer demographic analysis to understand the customer base.</li>
            <li>Profitability analysis to identify the most and least profitable products.</li>
          </ul>
          <h2>Tools Used</h2>
          <ul>
            <li>Tableau (for data visualization and dashboard creation)</li>
            <li>SQL (for data extraction and preparation)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
