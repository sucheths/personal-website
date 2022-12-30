import React from "react";
import './Contact.css'

const Contact = () => {


    return (
        <div className="container-content bg-color" id="profile">
            <div className="container text-center author-content-description">
                <div className="col-md-4 offset-md-4">
                    <h4>Profiles & Contact</h4>
                    <hr/>
                </div>
            </div>
            <div className="container author-content-description">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <a className="" href="https://wurls.co/such_ln">
                                    <i className="fa fa-linkedin fa-5x wow tada"/>
                                    <p>LinkedIn</p>
                                </a>
                            </div>
                            <div className="col-md-3 text-center">
                                <a className="" href="https://bitbucket.org/dashboard/repositories">
                                    <i className="fa fa-bitbucket fa-5x wow tada"/>
                                    <p>Bitbucket</p>

                                </a>
                            </div>
                            <div className="col-md-3 text-center">
                                <a className="" href="https://wurls.co/such_fb">
                                    <i className="fa fa-facebook fa-5x wow tada"/>
                                    <p>Facebook</p>

                                </a>
                            </div>
                            <div className="col-md-3 text-center">
                                <a className="" href="https://wurls.co/such_in">
                                    <i className="fa fa-instagram fa-5x wow tada"/>
                                    <p>Instagram</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;