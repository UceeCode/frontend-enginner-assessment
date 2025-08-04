import React from 'react';
import '../styles/Navbar.css';
import Image from 'next/image';
import logo from "../images/logo.png";
import Link from 'next/link';
import fbLogo from '../images/FB.png';
import igLogo from '../images/Insta.png';
import ytLogo from '../images/Youtube.png';
import liLogo from '../images/Linkedin.png';
import mobilemenu from '../images/mobilemenu.png';
const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className="logo">
            <Image
            src={logo}
            alt='logo_img'
            height={30}
            width={62}
            />
        </div>
        <div className="nav_links">
            <Link
            href="/"
            >
                Who We Are
            </Link>
            <Link
            href="/"
            >
                What We Do
            </Link>
            <Link
            href="/"
            >
                Our Events
            </Link>
            <Link
            href="/"
            >
                Resource Hub
            </Link>
            <Link
            href="/"
            >
                Let&apos;s Collaborate
            </Link>
        </div>
        <div className="nav_socials">
            <div className="sub_btn">
                <Link
                href="/"
                >
                    Subscribe
                </Link>
            </div>
            <div className="social_links">
                <Image
                src={liLogo}
                alt='linkedin_logo'
                height={2} 
                width={20} 
                />
                <Image
                src={fbLogo}
                alt='facebook_logo'
                height={2} 
                width={20} 
                />
                <Image
                src={igLogo}
                alt='instagram_logo'
                height={2} 
                width={20} 
                />
                <Image
                src={ytLogo}
                alt='youtube_logo'
                height={2} 
                width={20} 
                />
            </div>
        </div>
        <div className="mobile_menu">
            <Image
            src={mobilemenu}
            alt='menu'
            height={30}
            width={30}
            />
        </div>
    </div>
  )
}

export default Navbar