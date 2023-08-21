import ReactDom from 'react-dom'
import App from './App'
import './index.css'

import ReactGA from 'react-ga';
ReactGA.initialize('G-DNNJ8CLK35');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDom.render(<App/>, document.querySelector("#root"))
