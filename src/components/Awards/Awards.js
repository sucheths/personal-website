import React from "react";

const Awards = () => {
    return (
        <div className="container-content awards-padding bg-color" id="awards">
            <div className="container text-center author-content-description">
                <div className="col-md-4 offset-md-4">
                    <h4>Awards & Recognition</h4>
                    <hr/>
                </div>
            </div>
            <div className="container author-content-description">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <p> Rakuten ‘Delight the Customer’ Grand Prize Award, Technology Division (2019)
                                </p>
                            </li>
                            <li className="list-group-item">
                                <p>Most Valued Person, IT Department (2014)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards