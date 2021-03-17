import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

export function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <button onClick={signInWithGoogle} className="btn btn-primary">
            Sign In
        </button>
    );
}

export function SignOut() {
    return (
        auth.currentUser && (
            <button onClick={() => auth.signOut()} className="btn btn-primary">
                Sign Out
            </button>
        )
    );
}
