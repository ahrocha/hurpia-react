import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const GoogleAnalyticsTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        ReactGA.initialize("UA-1285816-28");
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize("UA-1285816-28");
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
};

export default GoogleAnalyticsTracker;