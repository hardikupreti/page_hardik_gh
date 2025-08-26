import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import proj1 from '../assets/images/proj1.png';
import proj2 from '../assets/images/proj2.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={proj1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Analog Bangap Reference Design</h2></a>
                <p>Analog Bandgap Reference Design using 90nm GPDK on Cadence Virtuoso</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={proj2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Sequence Detector using Verilog</h2></a>
                <p>Designed and Implemented a Sequence Detector using Verilog uisng FSM concept.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;