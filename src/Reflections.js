import React, { Component } from 'react';

class Reflections extends Component {
    render() {
        return (
            <div>
                <div className="textBlock">
                    <h2 className="center-text">Reflections on the "Start code"</h2>
                    <br></br>
                    <div className="center-text">
                        <a href="https://github.com/MivleDK/DAT3SEM_CA3_Backend">Github backend repo</a> | <a href="https://github.com/MivleDK/DAT3SEM_CA3_Frontend">Github frontend repo</a> | <a href="https://micklarsen.com/DAT3SEMCA3/">Backend deployment</a>
                    </div>
                    <br></br>
                    <br></br>
                    <p>Having successfully created and modified the start code I have aquired a greater understanding of "The bigger picture" </p>
                    <br></br>
                    <h4>Creating the start code</h4>
                    <p>Creating the start code involved almost all aspects from 1'st through the 3'rd semester.
                    <br></br>
                        <br></br>
                        <b>The database</b>
                        <br></br>
                    Setting up the database (Domain model was provided this time) and using an entity framework
                    greatly helped in understanding what issues ORM solve and how it makes the developers life easier
                        <br></br>
                        <br></br>
                        <b>Working with REST</b>
                        <br></br>
                    Using JAX-RS to create a rest with special annotation makes it easy to setup and configure a REST resource.
                    <br></br>
                    Using DTO's and Facades helped understanding how to achieve a separation of concerns and how to extract data from a database (Especially when the database consists of objects)
                    <br></br>
                        <br></br>
                        <b>Single page applications</b>
                        <br></br>
                    When working with REACT I understood why an SPA is "Smart".
                    <br></br>
                    It allows the client to only download changes on the site and prevents re-renders of the entire page.
                    <br></br>
                    This makes for a blazingly fast site with low server-load.
                    <br></br>
                        <br></br>
                        <b>Security concerns</b>
                        <br></br>
                        I fully understand why storing a password in plaintext is unacceptable. Mainly because many users re-use their credentials which would be devastating if the credentials are exposed from just one database.
                        <br></br>
                        We can mitigate this by salting and hashing a password!
                        <br></br>
                        Furthermore, tokens help allieviate server load since the token is created and signed the first time (Involving the database).
                        <br></br>
                        Consecutive interactions does not require the database and only uses the token (For as long the token is valid!).
                        <br></br>
                        The token also allows for extra information about the user which can be customized (Information such as username, roles, etc.).
                        <br></br>
                        <br></br>
                        <b>The bigger picture</b>
                        <br></br>
                        When combining the backend with the front-end we have a minimal, but functional full-stack solution, setup very minimally which serves as an excellent template / boilerplate.
                        <br></br>
                        We are able to fork this boilerplate from github, make a small amount of adjustments and achieve a solid base for a new project.
                        <br></br>
                        All of this is doable in a matter of 5-10 minutes.


                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        );
    }
}

export default Reflections;


