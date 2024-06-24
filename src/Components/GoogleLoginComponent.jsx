// src/Components/GoogleLoginComponent.jsx
import React from "react";
import { GoogleLogin as GoogleLoginButton } from "react-google-login";
import axios from "axios";

const GoogleLoginComponent = () => {
    const responseGoogle = (response) => {
        console.log(response);

        if (response.tokenId) {
            // Optionally send the Google token to your server for verification
            axios.post("/api/auth/google", { token: response.tokenId })
                .then(res => {
                    if (res.data.token) {
                        // Log the successful response
                        console.log("Login successful:", res.data);
                        // Redirect to the dashboard
                        history.push("/dashboard");
                    } else {
                        console.error("No token received from server");
                    }
                })
                .catch(err => {
                    console.error("Error during authentication:", err);
                });
        } else {
            console.error("Google login failed:", response);
        }
    };

    return (
        <GoogleLoginButton
            clientId="1068422445669-1i9pk9i3t3l32emmnb4eiuu20k9qoaq0.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleLoginComponent;
