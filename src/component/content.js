import React from 'react';
import About from "./about";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";


export default function content() {
    return (
        <div className="container-fluid p-0">
            <About></About>
            <Experience></Experience>
            <Education></Education>
            <Skills></Skills>
        </div>
    )
}
