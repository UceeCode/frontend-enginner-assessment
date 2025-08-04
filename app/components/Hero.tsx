'use client'
import React, { useEffect } from 'react';
import '../styles/Hero.css';
import leftImg from "../images/heroImg1.png";
import rightImg from "../images/heroimg2.png";
import Image from 'next/image';
import blur from '../images/blur.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {

  useEffect(() => {
      AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-in-out',
      });
  }, []);

  return (
    <div className='hero_container'>
        <div className="left_sec" data-aos="fade-right">
            <Image
            src={leftImg}
            alt="Hero Image"
            height={450}
            width={450}
            />
        </div>
        <div className="right_sec" data-aos="fade-left">
            <h1>Gaining Knowledge <br /><span>Through Connection.</span></h1>
            <div className="image_with_overlay">
                <Image
                src={rightImg}
                alt="Hero Image"
                height={650}
                width={700}
                className="hero-right-image"
                />
                <Image
                src={blur}
                alt="Blur Background"
                height={650} 
                width={700}
                className="blur_background_image"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero