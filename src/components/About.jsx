import '../styles/About.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";

function About() {
    return (
        <section id='about'>
            <div className='wrapper'>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis qui consequatur deleniti numquam recusandae maiores earum necessitatibus quibusdam quidem? Et quod aliquam ducimus modi fugiat non iusto mollitia beatae?</p>
                <h4>Programming Language & Tools</h4>
                <div className='skills'>
                    <FaPhp />
                    <FaLaravel />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <IoLogoJavascript />
                    <FaReact />
                    <FaBootstrap />
                    <FaJava />
                    <FaGit />
                </div>
            </div>
        </section>
    )
}

export default About
