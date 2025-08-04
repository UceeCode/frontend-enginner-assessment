import React from 'react';
import '../styles/Events.css';
import Link from 'next/link';
import arrow from '../images/arrowright.png';
import whitearrow from '../images/whitearrow.png';
import Image from 'next/image';
import calenderPng from "../images/calender.png";
import whitecalenderPng from "../images/whitecalender.png";


const Events = () => {
  return (
    <div className='events_container'>
        <div className="events_grid">
            <div className="event_card1">
                <h2>Upcoming Event for the year</h2>
                <p>Explore upcoming events tailored to equip, connect, and empower businesses across Africa and beyond.</p>
                <Link
                href={"/"}
                className='flex items-center gap-3'
                >
                    See All Events
                    <Image
                    src={arrow}
                    alt="arrow"
                    height={20}
                    width={20}
                    />
                </Link>
            </div>
            <div className="event_card2">
                <div className="card_header">
                    <Image
                    src={whitecalenderPng}
                    alt="calender"
                    height={35}
                    width={35}
                    />
                    <h2>Vision & Execution</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="links">
                    <Link
                    href={"/"}
                    className='flex items-center gap-3 link1'
                    >
                        Book A Seat
                        <Image
                        src={whitearrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                    <Link
                    href={"/"}
                    className='flex items-center gap-3'
                    >
                        Event Details
                        <Image
                        src={whitearrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                </div>
            </div>

            <div className="event_card">
                <div className="card_header">
                    <Image
                    src={calenderPng}
                    alt="calender"
                    height={35}
                    width={35}
                    />
                    <h2>Event Name</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="links">
                    <Link
                    href={"/"}
                    className='flex items-center gap-3 link1'
                    >
                        Book A Seat
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                    <Link
                    href={"/"}
                    className='flex items-center gap-3'
                    >
                        Event Details
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                </div>
            </div>

            <div className="event_card">
                <div className="card_header">
                    <Image
                    src={calenderPng}
                    alt="calender"
                    height={35}
                    width={35}
                    />
                    <h2>Event Name</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="links">
                    <Link
                    href={"/"}
                    className='flex items-center gap-3 link1'
                    >
                        Book A Seat
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                    <Link
                    href={"/"}
                    className='flex items-center gap-3'
                    >
                        Event Details
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                </div>
            </div>

            <div className="event_card">
                <div className="card_header">
                    <Image
                    src={calenderPng}
                    alt="calender"
                    height={35}
                    width={35}
                    />
                    <h2>Event Name</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="links">
                    <Link
                    href={"/"}
                    className='flex items-center gap-3 link1'
                    >
                        Book A Seat
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                    <Link
                    href={"/"}
                    className='flex items-center gap-3'
                    >
                        Event Details
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                </div>
            </div>

            <div className="event_card">
                <div className="card_header">
                    <Image
                    src={calenderPng}
                    alt="calender"
                    height={35}
                    width={35}
                    />
                    <h2>Event Name</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="links">
                    <Link
                    href={"/"}
                    className='flex items-center gap-3 link1'
                    >
                        Book A Seat
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                    <Link
                    href={"/"}
                    className='flex items-center gap-3'
                    >
                        Event Details
                        <Image
                        src={arrow}
                        alt="arrow"
                        height={20}
                        width={20}
                        />
                    </Link>
                </div>
            </div>
            
    
        </div>
    </div>
  )
}

export default Events