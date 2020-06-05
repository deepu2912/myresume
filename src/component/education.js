import React from 'react'

export default function education() {
    return (
       <>
         <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Manav Rachna University</h3>
                            <div className="subheading mb-3">Bachelor of Technology</div>
                            <div>Information Technology</div>
                            <p>Percentage - 60</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2014 - June 2018</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Tagore Academy Public School</h3>
                            <div className="subheading mb-3">Class 12</div>
                            <p>Percentage: 80.4</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">April 2013 - March 2014</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">D.A.V Public School</h3>
                            <div className="subheading mb-3">Class 10</div>
                            <p>GPA: 7.4</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">April 2011 - March 2012</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
       </>
    )
}
