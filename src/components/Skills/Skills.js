import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const Skills = (props) => {
    return (
        <div className="col-md-4">
            <ul className="list-group wow bounceIn">
                <li className="list-group-item list-group-item-primary">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[0]}
                </li>
                <li className="list-group-item list-group-item-secondary">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[1]}
                </li>
                <li className="list-group-item list-group-item-success">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[2]}
                </li>
                <li className="list-group-item list-group-item-danger">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[3]}
                </li>
                <li className="list-group-item list-group-item-warning">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[4]}
                </li>
                <li className="list-group-item list-group-item-info">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[5]}
                </li>
                <li className="list-group-item list-group-item-dark">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[6]}
                </li>
                <li className="list-group-item list-group-item-primary">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[7]}
                </li>
                <li className="list-group-item list-group-item-secondary">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[8]}
                </li>
                <li className="list-group-item list-group-item-success">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[9]}
                </li>
                <li className="list-group-item list-group-item-danger">
                    <i className="fa fa-check fa-2x"/>
                    {props.skills[10]}
                </li>
            </ul>
        </div>
    );
}


export default Skills