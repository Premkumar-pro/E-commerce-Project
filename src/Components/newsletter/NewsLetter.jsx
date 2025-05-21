import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='enter your emial id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
