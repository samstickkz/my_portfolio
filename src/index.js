import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDom.render(<App />, document.querySelector("#root"));

// Register the service worker for PWA
serviceWorkerRegistration.register();
