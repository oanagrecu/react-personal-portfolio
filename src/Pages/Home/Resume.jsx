import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ✅ Folosește worker-ul din CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
	const pdf = process.env.PUBLIC_URL + "/Resume2.pdf";
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({numPages}) => {
		setNumPages(numPages);
		setPageNumber(1);
	};

	return (
		<div style={{textAlign: "center", marginTop: "8rem"}}>
			<p>Click the button below to download the PDF</p>

			<button
				style={{marginTop: "1rem"}}
				className="btn btn-primary"
				onClick={() => {
					const link = document.createElement("a");
					link.href = pdf;
					link.download = "Resume2.pdf";
					link.target = "_blank";
					link.click();
				}}
			>
				Download CV
			</button>

			<div
				style={{
					margin: "3rem auto",
					width: "100%",
					maxWidth: "900px",
					height: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden"
				}}
			>
				<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} loading={<p>Loading PDF...</p>} error={<p>Failed to load PDF</p>}>
					<Page pageNumber={pageNumber} width={800} />
				</Document>
			</div>

			{numPages && (
				<div style={{marginTop: "1rem"}}>
					<button className="btn btn-primary" onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
						Prev
					</button>
					<span style={{margin: "0 1rem"}}>
						Page {pageNumber} of {numPages}
					</span>
					<button className="btn btn-primary" onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default Resume;
