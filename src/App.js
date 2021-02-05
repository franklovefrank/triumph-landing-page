import "./App.css";
import React from "react";
import { Container, Row, Col, Image, Card, Table } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import playnow from "./assets/playnow.png";
import choose from "./assets/choose.png";
import buyin from "./assets/buyin.png";
import cashout from "./assets/cashout.png";
import secure from "./assets/secure.svg";
import anticheating from "./assets/anticheating.svg";
import fair from "./assets/fair.svg";
import matchmaking from "./assets/matchmaking.svg";
import logo from "./assets/triumph_white.png";
import logo1 from "./assets/gradientlogo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid className="container1">
          <Row className="justify-content-center header">
            <Col xs={1}>
              <Image src={logo1} fluid></Image>
            </Col>
            <Col xs={4}>
              <Image className="logoname" src={logo} fluid></Image>
            </Col>
          </Row>
          <Row className="justify-content-center row1">
            <Col xs={12} md={5}>
              <h1 className="header-text1">
                {" "}
                Play online games for real money!
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center row2">
            <h1 className="header-text2"> How to play:</h1>
          </Row>
          <Row className="justify-content-center">
            <Col xs={8} md={4}>
              <Link to="/playnow">
                <Image src={playnow} fluid />
              </Link>
            </Col>
          </Row>
          <Row className="row3 justify-content-center">
            <Col xs={11} md={3}>
              <Image className="graphics" src={choose} fluid />
              <h2 className="graphics-text">CHOOSE A GAME</h2>
            </Col>
            <Col xs={11} md={3}>
              <Image className="graphics" src={buyin} fluid />
              <h2 className="graphics-text">BUY IN</h2>
            </Col>
            <Col xs={11} md={3}>
              <Image className="graphics" src={cashout} fluid />
              <h2 className="graphics-text">CASH OUT!</h2>
            </Col>
          </Row>
          <Row className="justify-content-center row5">
            <Col xs={11} sm={5} md={3}>
              <Card className="cards h-100" fluid>
                <Card.Img className="card-header-img" src={secure} fluid />
                <Card.Body>
                  <Card.Title className="card-title">Secure</Card.Title>
                  <Card.Text className="card-text">
                    Paypal and Bitcoin payments and security
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={11} sm={5} md={3}>
              <Card className="cards h-100" fluid>
                <Card.Img
                  className="card-header-img"
                  src={anticheating}
                  fluid
                />
                <Card.Body>
                  <Card.Title className="card-title">Anti-Cheating</Card.Title>
                  <Card.Text className="card-text">
                    We employ anti-robot detection software
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={11} sm={5} md={3}>
              <Card className="cards h-100" fluid>
                <Card.Img className="card-header-img" src={fair} fluid />
                <Card.Body>
                  <Card.Title className="card-title">Fair</Card.Title>
                  <Card.Text className="card-text">
                    Only play with real, verified humans
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={11} sm={5} md={3}>
              <Card className="cards h-100" fluid>
                <Card.Img className="card-header-img" src={matchmaking} fluid />
                <Card.Body>
                  <Card.Title className="card-title">Matchmaking</Card.Title>
                  <Card.Text className="card-text">
                    We match you with people in your skill range
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid className="container2">
          <Row className="row6">
            <Col md={7}>
              <h2> Biggest Winners</h2>
              <Table striped variant="dark">
                <thead>
                  <tr className="labels">
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st</td>
                    <td>JacobBrookes1</td>
                    <td>$23040</td>
                  </tr>
                  <tr>
                    <td>2nd</td>
                    <td>TommyC</td>
                    <td>$23000</td>
                  </tr>
                  <tr>
                    <td>3rd</td>
                    <td>JaredtheCrusher</td>
                    <td>$12000</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
              <h2>Best Games</h2>
              <Table striped variant="dark">
                <thead>
                  <tr className="labels">
                    <th>Rank</th>
                    <th>Game</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st</td>
                    <td>Flappy Bird</td>
                  </tr>
                  <tr>
                    <td>2nd</td>
                    <td>Solitaire</td>
                  </tr>
                  <tr>
                    <td>3rd</td>
                    <td>Candy Crush</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <Container fluid className="container1">
          <Row className="justify-content-center row8">
            <Col>
              <text className="header-text3">Learn More</text>
            </Col>
          </Row>
          <Row className="justify-content-center row9">
            <Col xs={8}>
              <text className="header-text4">
                {" "}
                If you still have questions or simply want to learn more you can
                check our Help Docs or our bitcointalk thread
              </text>
            </Col>
          </Row>

          <Row className="justify-content-center row10">
            <Col xs={5}>
              <Link to="/playnow">
                <Image src={playnow} fluid />
              </Link>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
