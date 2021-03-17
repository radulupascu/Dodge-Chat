import React, { useState, useRef, useEffect } from "react";
import { firestore, auth } from "../firebase";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/app";
import { Card } from "react-bootstrap";
import { SignOut } from "./AccountFunctions";

import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom() {
    const setWindowHeight = () => {
        var windowHeight = window.innerHeight;
        document.body.style.height = windowHeight + "px";
        document.getElementById("root").style.minHeight =
            document.body.style.height;
        // console.log(document.body.style.height);
    };
    window.addEventListener("resize", setWindowHeight, false);

    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt");
    const dropToNewMessage = useRef();

    const [messages] = useCollectionData(query, { idField: "id" });
    // console.log(messages);

    const [formValue, setFromValue] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });

        setFromValue("");
        dropToNewMessage.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        dropToNewMessage.current.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <div
            id="chatWindow-outline"
            className="d-flex align-items-center justify-content-center container-fluid"
            style={{ minHeight: "100vh" }}
        >
            <Card
                id="chatWindow"
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
                    <SignOut></SignOut>
                </div>
                <Card.Body style={{ maxWidth: "540px" }}>
                    <main
                        className="d-flex flex-column"
                        style={{ overflowY: "auto", height: "70vh" }}
                    >
                        {messages &&
                            messages.map((msg) => (
                                <ChatMessage key={msg.id} message={msg} />
                            ))}
                        <span ref={dropToNewMessage}></span>
                    </main>

                    <form
                        onSubmit={sendMessage}
                        className="position-relative d-flex"
                    >
                        <input
                            className="text-white w-100 p-2 border-0"
                            //className="w-75 border-0"
                            value={formValue}
                            style={{
                                minHeight: "30px",
                                outline: "0",
                                background: "rgb(58, 58, 58)",
                            }}
                            onChange={(e) => setFromValue(e.target.value)}
                        />

                        <button
                            className="text-white w-25 p-0 border-0"
                            //className="mt-2 btn text-white w-25"
                            style={{
                                background: "#5f85db",
                                minHeight: "30px",
                            }}
                            type="submit"
                        >
                            🕊️
                        </button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}
