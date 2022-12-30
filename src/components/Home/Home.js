import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './Home.css'
import Skills from "../Skills";
import Contact from "../Contact";
import Project from "../Project";
import Awards from "../Awards";
import GetInTouch from "../GetInTouch";
import Footer from "../Footer";

const Home = () => {

    const skills1 = ['Java 17', 'Spring Boot', 'Spring Framework', 'Spring WEB-MVC', 'Spring Rest',
        'Spring Batch', 'Spring ORM', 'Spring Core', 'Spring JPA', 'Scala', 'Snowflake']
    const skills2 = ['React JS', 'Bootstrap 4', 'Apache Kafka','Jersey JAX RS', 'Apache Solr', 'Apache Camel',
        'Google Guice', 'Hibernate ORM', 'Apache Jmeter', 'Apache Spark', 'Apache Flink']
    const skills3 = ['Python', 'Gradle', 'Maven', 'Kubernetes', 'Docker', 'NGINX', 'Flask',
        'Events Streaming', 'Apache Webserver & Tomcat', 'Glassfish3','Amazon Web Services']


    return (<>
            <div className="home-bg first-container" id="home">
                <div className="container text-center">
                    <div className="col-md-4 offset-md-4">
                        <img className="image-style" src={require('../../assets/images/badminton.jpg')} alt={''}/>
                    </div>
                </div>
                <div>
                    <div className="container text-center author-content-description">
                        <div className="col-md-4 offset-md-4">
                            <h4>Sucheth Shivakumar</h4>
                            <hr/>
                        </div>

                    </div>
                    <div className="container text-center author-content-description">
                        <div className="col-md-8 offset-md-2">
                            <p>I'm a software developer, architect willing to learn more every day.
                                Let's keep in touch so I can share with you my knowledge and I can learn from you as
                                well.</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container-content bg-color" id="about">
                <div className="container text-center author-content-description">
                    <div className="col-md-4 offset-md-4">
                        <h4>About Me!</h4>
                        <hr/>
                    </div>

                </div>
                <div className="container text-center author-content-description">
                    <div className="col-md-8 offset-md-2">
                        <p>I'm a Full stack software developer and an architect works primarily on Java applications.
                            I'm highly passionate about writing code following good practices and top-notch
                            technologies.
                            I have been involved in many technological projects, in the field of e-commerce, payment
                            systems,
                            telecommunication, health and startup.
                            On the academic side I hold a Bachelor of Engineering in Information Science & Technology
                            from
                            SIT,
                            VTU.<br/>
                            I consider myself a person with hunger for knowledge and always looking for new ideas to
                            improve
                            what the market has to offer.
                        </p>
                        <br/>
                        <h5>You're The Average Of The Five People You Spend The Most Time With." - Jim Rohn</h5>
                    </div>

                </div>
            </div>
            <div className="container-content-white1" id="skills">
                <div className="container text-center author-content-description">
                    <div className="col-md-4 offset-md-4">
                        <h4>Skills</h4>
                        <hr/>
                    </div>

                </div>

                <div className="container author-content-description">
                    <div className="row">
                        <Skills skills={skills1}/>
                        <Skills skills={skills2}/>
                        <Skills skills={skills3}/>
                    </div>

                </div>
            </div>
            <Contact/>
            <Project/>
            <Awards/>
            <GetInTouch/>
            <Footer/>
        </>
    );
}
export default Home;