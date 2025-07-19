"use client";

import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaChartLine, FaChartBar, FaBolt } from 'react-icons/fa';

const projects = [
  {
    title: 'Birthweight Analysis',
    description: 'Performed statistical modeling to analyze the impact of smoking and maternal factors on newborn weight. Conducted t-tests and multiple regression using R.',
    link: '/sql-project',
    icon: <FaChartLine size={50} className="mb-3" />,
  },
  {
    title: 'Auto Sales Data Visualization',
    description: 'Built interactive dashboards using Tableau to analyze sales trends and customer demographics. Visualized KPIs like sales by region, profitability, and customer behavior.',
    link: '/python-project',
    icon: <FaChartBar size={50} className="mb-3" />,
  },
  {
    title: 'EV Market Analysis',
    description: 'Used Power BI to analyze electric vehicle efficiency and range across segments. Developed heatmaps and bar charts to showcase performance trends.',
    link: '/power-bi-project',
    icon: <FaBolt size={50} className="mb-3" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4 text-center">
              <Card.Body>
                {project.icon}
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link}>View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
