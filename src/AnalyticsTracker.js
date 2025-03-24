import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const AnalyticsTracker = () => {
	const location = useLocation();
	const GA_TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID; // Get from .env

	useEffect(() => {
		if (window.gtag && GA_TRACKING_ID) {
			window.gtag("config", GA_TRACKING_ID, {
				page_path: location.pathname,
			});
		}
	}, [location, GA_TRACKING_ID]);

	return null;
};

export default AnalyticsTracker;
