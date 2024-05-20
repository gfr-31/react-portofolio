import profilePicture from '../assets/profile-picture.png'

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} alt="" />
                <h3>Gifran Fazriliana Hafeez</h3>
                <p>Lorem - Lorem - Lorem</p>
                <div className='socialMedia'>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaWhatsapp /></a>
                    <a href=""><FaTelegramPlane /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
