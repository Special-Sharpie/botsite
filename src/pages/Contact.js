import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="contactTitle">
                <p>Contact Us</p>
                <hr />
            </div>
            <div className="pageBody">
                <div className="contactField">
                    <p>
                        Having problems? <a href="mailto:hockeystatsbot@gmail.com" className="inTextLink">Email Us</a> (hockeystatsbot@gmail.com)
                        <br />
                        Find us on <a href="https://github.com/Special-Sharpie/HockeyStatsBot" target="_blank" rel="noreferrer" className="inTextLink">Github</a>
                        <br/>
                        Like the bot, and want to suppport its development? <a href="https://www.paypal.com/paypalme/hockeystatsbot" target="_blank" rel="noreferrer" className="inTextLink">Donate here!</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact