import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "./Resume.pdf";
import Footer from "./Footer";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const onDownloadClick = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <div>
      <div className="resume--section">
        <center>
          <p className="section--title">
            Click the button below to download the PDF
          </p>
          <button onClick={onDownloadClick} className="btn btn-primary">
            Download PDF
          </button>
        </center>
        <div>
          <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <button onClick={onDownloadClick} className="btn btn-primary">
          Download PDF
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
