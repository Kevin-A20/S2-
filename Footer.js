import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue pt-6">
                <div className="container-fluid text-center text-md-small">
                    <div className="row">
                    <div className="col-md-1 mt-md-0 mt">
                        <img class="../src/Componente/logo.png" />
                    <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
                            <ul className="list-unstyled text-small">            
                            </ul>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#!">Cool stuff</a></li>
                                <li><a className="text-muted" href="#!">Random feature</a></li>
                                <li><a className="text-muted" href="#!">Team feature</a></li>
                                <li><a className="text-muted" href="#!">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#!">Another one</a></li>
                                <li><a className="text-muted" href="#!">Last time</a></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"></hr>
                        <div className="col-md-2 mb-md-0 mb-3">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Resource</a></li>
                                <li><a className="text-muted" href="#">Resource name</a></li>
                                <li><a className="text-muted" href="#">Another resource</a></li>
                                <li><a className="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5 mb-md-0 mb-3">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Team</a></li>
                                <li><a className="text-muted" href="#">Locations</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div> </div>
            </footer>
        );
    }
}
export default Footer;
