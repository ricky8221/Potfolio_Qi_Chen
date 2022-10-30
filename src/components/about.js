// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
    return (
        <div className="mainBody">
            <h1 className="content is-medium">Full Stack Developer</h1>
            <hr />
            <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Ricky Chen" />
            <h2 className="content is-italic mt-4">
                I'm Ricky, a web developer the full stack to better my work
            </h2>

            <p className="aboutContent">
                • 2+ years of experience in developing web page and user interfaces using <b>HTML5</b>, <b>CSS3</b>, <b>Bootstrap</b>, <b>JavaScript</b>, <b>jQuery</b>,
                <b>React.js</b>, <b>Webpack</b>, <b>JSON</b>, <b>Socket.io</b>, <b>MySQL</b>, <b>MongoDB</b>, <b>AJAX</b>, <b>DOM</b>.
                <br></br>
                • Expertise in developing front-end web applications using client-side JavaScript frameworks like <b>handlebar.js</b> and <b>React.js</b>
                to achieve MVC design.
                <br></br>
                • Experienced in developing applications using <b>React.js</b> for view rendering and implementing React JS with Redux and Flux
                to achieve MVC design flow to the application.
                <br></br>
                • Experience in working with view rendering JavaScript like <b>jQuery</b> with <b>AJAX</b> to make asynchronous calls.
                <br></br>
                • Experience in testing applications using <b>Jest.js</b>.
                <br></br>
                • Experience with relational databases like <b>MySQL</b>, and NoSQL like <b>MongoDB</b>.
                <br></br>
                • Experience in implementing <b>ORM</b> technology like <b>Sequelize</b> for SQL, and <b>Mongoose</b> for NoSQL.
                <br></br>
                • Knowledge in using Amazon Web Services (<b>AWS</b>) like <b>EC2</b> for Virtual Servers to deploy applications, <b>S3</b> and <b>Glacier</b> for storing data, <b>Amazon Elastic Load Balancing, AWS Identity, Amazon EBS, Amazon SQS.</b>
                <br></br>
                Experience in building bidirectional and low-latency communication platforms by using <b>Socket.io</b>.
            </p>
        </div>
    );
}

export default About;
