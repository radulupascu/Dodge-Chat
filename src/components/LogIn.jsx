import React from "react";
import { Card } from "react-bootstrap";
import firebase from "firebase/app";


export default function LogIn() {
    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center container-fluid"
                style={{ minHeight: "100vh" }}
            >
                <Card
                    className="d-flex align-items-center justify-content-center text-white mh-100"
                    style={{
                        width: "540px",
                        display: "flex",
                        background: "#26282b",
                    }}
                >
                    <div>
                        <h1>Dodge Chat</h1>
                    </div>
                    <div className="center">
                        
                        {/* <SignIn></SignIn> */}
                        <br></br>
                        <button
                        className="btn btn-primary"
                            onClick={() => {
                                firebase.app().auth().signInAnonymously();
                            }}
                        >Anonymous</button>

                    </div>
                    <Card.Body style={{ maxWidth: "540px" }}>
                        Such Wow!
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
