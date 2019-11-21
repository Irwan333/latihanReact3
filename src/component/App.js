import React, {Component} from 'react';
import Grid from './Grid';
import Home from './Home/Home'
import '../style/style.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
render() {
return(
<Router>
    <div className="header">
        <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
                <a className="navbar-brand" to=""><img src={require('../logo/logo.png')} alt="" width="180" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PROMO
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">PROMO</Link>
                                <Link className="dropdown-item" to="">Partnership</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown1" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PAKET ADD-ON
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <Link className="dropdown-item" to="">Action</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text-white">PUSAT BANTUAN</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="container">
            <Home />
        </div>
    </div>
</Router>
)
}
}

export default App;