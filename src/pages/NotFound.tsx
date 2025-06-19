import React from "react";
import '../styles/404.scss';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {

    return (
        <div className="not-found">
                <Header />
            <div className="not-found-body">
                <div className="error-404">404</div>
                <div className="oopsThePage">Oops! The page you’re looking for doesn’t exist.</div>
                <div className="returnToHome">
                    <a href="/">Return to home page</a>
                </div>
            </div>
                <Footer />
        </div>
        
    );
}
