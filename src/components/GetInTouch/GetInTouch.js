import React from "react";

const GetInTouch = () => {
    return (
        <div className="container-content-white1 awards-padding" id="contact">
            <div className="container text-center author-content-description">
                <div className="col-md-4 offset-md-4">
                    <h4>Let's Get In Touch!</h4>
                    <hr/>
                </div>
            </div>
            <div className="container">
                <div className="col-md-6 offset-md-3 text-center">
                    <p>
                        Ready to start your next project? That's great! Send me an email and I will get back to you as
                        soon as possible!
                    </p>
                    <i className="fa fa-envelope-o fa-3x wow bounceIn">
                    </i>
                    <a href="mailto:sucheth13@gmail.com">
                        <p>sucheth13@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default GetInTouch;