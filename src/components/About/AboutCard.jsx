import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I'm <span className="purple">Salem Mohamed , </span>
             I hold in position of Remote<span className="purple"> Backend Developer at Rezko POS </span>
             <br />
            <br />
            I recently worked as a software developer at <span className="purple">Walemah POS</span>
            <br />
            <br />
            Specialists in  database management systems <span className="purple">(DBMS)</span> ,<br /> <span className="purple">back-end solutions</span>, and network administration
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
            Version Control
            </li>
            <li className="about-activity">
            API Development 
            </li>
            <li className="about-activity"> 
            NoSQL optimization, and indexing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do it fuckin' flawlessly, or don' do it at all!"{" "}
          </p>
          <footer className="blockquote-footer">Salem Mohamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
