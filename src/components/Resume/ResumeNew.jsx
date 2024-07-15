import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "/Salem Mohamed resume.pdf";
import pdfPreview from "/Salem Mohamed resumepreview.png"; // Assuming you have a preview image
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showPdf, setShowPdf] = useState(false); // State to toggle between PDF and preview image

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Function to toggle between PDF and preview image
  const togglePdfPreview = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            onClick={togglePdfPreview}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Toggle Preview
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          {showPdf ? (
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          ) : (
            <img src={pdfPreview} alt="Resume Preview" style={{ maxWidth: "50%" }} />
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
