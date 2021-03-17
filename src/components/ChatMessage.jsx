import React from "react";
import { auth } from "../firebase";

export default function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
        <>
            <div className={"message" + messageClass}>
                <img
                    alt="Profile"
                    className="mr-1 mb-1"
                    //src={}
                    src={photoURL ? photoURL : process.env.PUBLIC_URL + "/dodge-cool.png"}
                />
                <div
                    className="d-inline-block m-2"
                    style={{
                        background: "rgb(95, 133, 219)",
                        border: "5px solid rgb(95, 133, 219)",
                        maxWidth: "400px",
                        borderRadius: "5px 5px 5px 1px"
                    }}
                >
                    {text}
                </div>
            </div>
        </>
    );
}
