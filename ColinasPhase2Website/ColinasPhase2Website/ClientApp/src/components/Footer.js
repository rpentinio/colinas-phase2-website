import React, { Component } from 'react';
import '../styles/Footer.css';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className="footer-style">
                <p>All Rights Reserved</p>
            </footer>
        );
    }
}