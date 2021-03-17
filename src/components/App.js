import React from "react";
import LogIn from "./LogIn";
import ChatRoom from "./ChatRoom";
import { auth } from "../firebase";
import "../App.css";

import { useAuthState } from "react-firebase-hooks/auth";

export default function App() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <header></header>
            <section>{user ? <ChatRoom /> : <LogIn />}</section>
        </div>
    );
}
