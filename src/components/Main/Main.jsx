import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} />
        </div>
        <div className='main-container'>
            <div className='greet'>
                <p><span>Hello, Wasim.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} />
                </div>
                <div className='card'>
                    <p>Briefly summarize this concetp: urban planning</p>
                    <img src={assets.bulb_icon} />
                </div>
                <div className='card'>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} />
                </div>
                <div className='card'>
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} />
                </div>
            </div>
            <div className='main-bottom'>
                <div className='search-box'>
                    <input type='text' placeholder='Ask Gemini' />
                    <div>
                        <img src={assets.gallery_icon} />
                        <img src={assets.mic_icon} />
                        <img src={assets.send_icon} />
                    </div>
                </div>
                <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check it's responses.</p>
            </div>
        </div>

    </div>
  )
}

export default Main
