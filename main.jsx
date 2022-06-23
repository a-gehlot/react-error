import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import ReactPerson from "./person.jsx";


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(
        <div>
            <ReactPerson />
        </div>
    )
})