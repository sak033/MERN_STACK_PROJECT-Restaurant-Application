import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">
                    <p>The only thing we're serious about is food</p>
                </h1>
            </div>
            <p className='mid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo ab numquam minus recusandae sint qui molestias, pariatur, facilis doloremque blanditiis sit adipisci, sunt reiciendis corporis porro ipsum! Dolor blanditiis quod magni eius reprehenderit odit nobis incidunt ducimus impedit? Deleniti earum dolore enim ex cum et, nostrum vel labore assumenda!</p>
          <Link to={"/"}>Explore Menu<span>
            <HiOutlineArrowNarrowRight />
            </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About