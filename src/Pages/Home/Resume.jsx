import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
const pdf = process.env.PUBLIC_URL + "/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDownloadClick = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <div className="resume--section">
        <center>
          <p className="section--title">
            Click the button below to download the PDF
          </p>
          <button className="btn btn-primary" onClick={onDownloadClick}>
            &nbsp;Download CV
          </button>
        </center>
        <div>
          <Document file={pdf} renderMode="canvas">
            <Page pageNumber={1} onLoadSuccess={onDocumentLoadSuccess} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
