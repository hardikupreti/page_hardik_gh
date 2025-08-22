import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faMicrochip, faRobot } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "LVDS RX",
    "PLL",
    "Voltage Regulator",
    "PWM",
    "DAC",
    "Error Amplifier"
];

const labelsSecond = [
    "Tektronix MSO54 Oscilloscope",
    "Tektronix AFG 330000 Series",
    "Keysight 81134A Pattern Generator",
    "Keithley SMUs",
    "Agilent Power Supplies",
    "Cytec RF Switch",
    "Multimeter",
    "Keysight Spectrum Analyzer"

];

const labelsThird = [
    "PyVisa",
    "Numpy",
    "Pandas",
    "Matplotlib"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Electrical Validation</h3>
                    <p>I have characterized various Analog IPs like LVDS RX, PLL, Voltage Regulator, Error Amplifier etc.</p>
                    <div className="flex-chips">
                        <span className="chip-title">IPs Characterized:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Bench Setup Automation</h3>
                    <p>Once the Silicon Bringup is completed, I develop Python based automation using PyVisa library to enable data collection on the circuits with minimal manual intervention.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Instruments:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analysis and Visualization</h3>
                    <p>I have experience deveoping data analysis and visualization scripts to support data driven engineering decisions. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Libraries:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;