import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const GA_TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

if (GA_TRACKING_ID) {
	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
	document.head.appendChild(script);

	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	window.gtag = gtag;

	gtag("js", new Date());
	gtag("config", GA_TRACKING_ID);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
