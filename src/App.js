import "./App.css";
import React from "react";
import { Container, Row, Col, Image, Card, CardDeck, Table } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import playnow from "./assets/playnow.png";
import choose from "./assets/choose.png";
import buyin from "./assets/buyin.png";
import cashout from "./assets/cashout.png";
import secure from "./assets/secure1.png";
import anticheating from "./assets/anticheating.png";
import fair from "./assets/fair1.png";
import matchmaking from "./assets/matchmaking1.png";
import logo from "./assets/triumph_white.png";
import logo1 from "./assets/gradientlogo.png";


function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid className="container1">

        <Row className="justify-content-end header">
        <Link to="/login" className="login">
                LOGIN
          </Link>   
          <Link to="/register" className="login">
            REGISTER
          </Link>
          </Row>

          <Row className="justify-content-center row0">
            <Col xs={2} md={1}>
              <Image src={logo1} fluid></Image>
            </Col>
            <Col xs={8} md={4}>
              <Image className="logoname" src={logo} fluid></Image>
            </Col>
          </Row>

          <Row className="justify-content-center row1">
            <Col xs={8} md={6}>
              <h1 className="text1">
                Play online games for real money!
              </h1>
            </Col>
          </Row>
          
          <Row className="justify-content-center row2">
            <text className="text2"> How to play:</text>
          </Row>

          <Row className="justify-content-center">
            <Col sm={8} md={4}>
              <Link to="/playnow">
                <Image src={playnow} fluid />
              </Link>
            </Col>
          </Row>

          <Row className="row3 justify-content-center">
            <Col xs={8} md={3}>
              <Image className="graphics" src={choose} fluid />
              <h2 className="graphics-text">CHOOSE A GAME</h2>
            </Col>
            <Col xs={8} md={3}>
              <Image className="graphics" src={buyin} fluid />
              <h2 className="graphics-text">BUY IN</h2>
            </Col>
            <Col xs={8} md={3}>
              <Image className="graphics" src={cashout} fluid />
              <h2 className="graphics-text">CASH OUT!</h2>
            </Col>
          </Row>

          <Row className="justify-content-center row5">
            <Col xs={5} md={3}>
              <Image className="cards" src={secure} fluid></Image>
            </Col>
            <Col xs={5} md={3}>
            <Image className="cards" src={anticheating} fluid></Image>
              </Col>
              <Col xs={5} md={3}>
              <Image className="cards" src={fair} fluid></Image>
              </Col>
              <Col xs={5} md={3}>
              <Image className="cards" src={matchmaking}fluid></Image>
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
