import React from "react";
import './Project.css'

const Project = () => {
    return (
        <div className="container-content-white1" id="project">
            <div className="container text-center author-content-description">
                <div className="col-md-4 offset-md-4">
                    <h4>Current Side Project</h4>
                    <hr/>
                </div>
            </div>
            <div className="padding-img container">
                <div className="row">
                    <div className="col-md-8">
                        <a href="https://weeurls.com">
                            <img className="img-size img-responsive" src={require('../../assets/images/weeurls.jpg')}
                                 alt={''}/>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h4>
                            <a href="https://weeurls.com">
                                WEEURLs
                            </a>
                        </h4>
                        <p>
                            A URL Shortening Service
                        </p>
                        <p>
                            Often regular Unshortened links may be aesthetically unpleasing.<br/>
                            WEEURLs ‘beautify’ them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Project;