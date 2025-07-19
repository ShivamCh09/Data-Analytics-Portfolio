"use client";

import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { FaDatabase, FaPython, FaChartBar, FaTable, FaFileExcel, FaGitAlt, FaRProject, FaCar, FaBookOpen, FaDumbbell, FaCloud, FaGamepad, FaChartLine } from 'react-icons/fa';

const skills = [
  { name: 'SQL', icon: <FaDatabase size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Power BI', icon: <FaChartBar size={40} /> },
  { name: 'Tableau', icon: <FaTable size={40} /> },
  { name: 'Advanced Excel', icon: <FaFileExcel size={40} /> },
  { name: 'R', icon: <FaRProject size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
];

const hobbies = [
  {
    icon: <FaChartLine size={50} className="mb-3" />,
    title: 'Data Visualization & Analytics',
    text: 'Passionate about telling stories through data and exploring patterns in real-world datasets.',
  },
  {
    icon: <FaCar size={50} className="mb-3" />,
    title: 'Automobile Engineering & Innovation',
    text: 'Lifelong fascination with cars, automotive design, and cutting-edge technologies shaping the future of mobility.',
  },
  {
    icon: <FaBookOpen size={50} className="mb-3" />,
    title: 'Reading & Researching Automobiles',
    text: 'Enjoy learning about automotive history, performance engineering, and emerging EV trends.',
  },
  {
    icon: <FaDumbbell size={50} className="mb-3" />,
    title: 'Fitness & Active Lifestyle',
    text: 'Committed to staying healthy and maintaining a balanced lifestyle through regular workouts and nutrition.',
  },
  {
    icon: <FaCloud size={50} className="mb-3" />,
    title: 'Exploring Technology',
    text: 'Interested in cloud platforms, automation tools, and building web-based projects.',
  },
  {
    icon: <FaGamepad size={50} className="mb-3" />,
    title: 'Video Games (Strategy & Racing)',
    text: 'Love games that challenge problem-solving skills and fuel my passion for cars.',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Shivam Choudhary - Data Analyst</title>
          <meta name="description" content="Data Analytics Portfolio of Shivam Choudhary" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>

        <main>
          <div className="hero-section text-center p-5 mb-4 rounded-3">
            <Row className="align-items-center">
              <Col md={3}>
                <Image src="/Portfolio Pic.jpg" alt="Shivam Choudhary" roundedCircle fluid />
              </Col>
              <Col md={9}>
                <h1 className="display-4">Shivam Choudhary</h1>
                <p className="lead">Data Analyst | SQL, Python, Power BI, Tableau</p>
                <p>Passionate about leveraging data to drive business decisions and process improvements.</p>
              </Col>
            </Row>
          </div>

          <section id="about" className="py-5">
            <h2 className="text-center mb-4">About Me</h2>
            <Row>
              <Col md={8} className="mx-auto text-center">
                <p>
                  Aspiring Data Analyst and Business Analyst with postgraduate certifications in Data Analytics and Project Management. Proficient in SQL, Python, Power BI, Tableau, and Advanced Excel. Experienced in analyzing datasets, creating dashboards, and presenting actionable insights. Strong background in customer operations and team leadership with 4+ years in fast-paced environments.
                </p>
              </Col>
            </Row>
          </section>

          <section id="skills" className="py-5">
            <h2 className="text-center mb-4">Skills</h2>
            <Row className="justify-content-center">
              {skills.map((skill, index) => (
                <Col key={index} xs={6} md={3} className="text-center mb-4">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      {skill.icon}
                      <Card.Text className="mt-2">{skill.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section id="hobbies" className="py-5">
            <h2 className="text-center mb-4">Hobbies & Interests</h2>
            <Row>
              {hobbies.map((hobby, index) => (
                <Col key={index} md={4} className="text-center mb-4">
                  <Card className="h-100">
                    <Card.Body>
                      {hobby.icon}
                      <Card.Title>{hobby.title}</Card.Title>
                      <Card.Text>{hobby.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <Projects />

          <section id="resume" className="py-5 text-center">
            <h2 className="mb-4">Resume</h2>
            <Button variant="primary" href="/Shivam Choudhary Resume.pdf" download>
              Download My Resume
            </Button>
          </section>

          <hr className="my-5" />

          <section id="contact" className="py-5">
            <h2 className="text-center mb-4">Contact</h2>
            <p className="text-center">Email: <a href="mailto:choudharyshivam09@gmail.com">choudharyshivam09@gmail.com</a></p>
            <p className="text-center">LinkedIn: <a href="https://www.linkedin.com/in/shivamchoudhary" target="_blank" rel="noopener noreferrer">linkedin.com/in/shivamchoudhary</a></p>
          </section>
        </main>

        <footer className="text-center py-4">
          <p>&copy; 2025 Shivam Choudhary</p>
        </footer>
      </Container>
    </>
  );
}
