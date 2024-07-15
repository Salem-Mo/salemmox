import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineX,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by <span className="purple">Salem Mohamed</span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © <span className="purple">{year}</span> </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Salem-Mo"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size="1.5em"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/salemmox"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineX size="1.5em"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/salemmox/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size="1.5em"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/whokilled.salemmox/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram size="1.5em"/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
