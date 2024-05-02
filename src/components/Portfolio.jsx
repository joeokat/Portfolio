import React from 'react'
import web from "../assets/web.svg"
import me from "../assets/me.jpg";

export const Portfolio = () => {
  return (
    <div className='portfolio--container'>
        <h2>Recent Work</h2>
        
            <div className="portfolio--row">
            <div className='portfolio--card'>
                <img src={me} alt="" />
                <p className='title'>Spartan Booking App</p>
                <p> Web Technologies: Svelte.js</p>
                <a className='view--BTN' href="odx.vercel.app" target='_blank' > View Live Project
                <img src={web} alt="" />
                </a>
            </div>

            <div className='portfolio--card'>
                <img src={me} alt="" />
                <p className='title'>Portfolio Website 2.0</p>
                <p> Web Technologies: HTML + CSS</p>
                <a className='view--BTN' href="#"> View Live Project
                <img src={web} alt="" />
                </a>
            </div>
            </div>
    </div>
  )
}