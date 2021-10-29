import React from 'react'
import "./About.css"

function About() {
    return (
        <div>
            <div className="aboutTitle">
                <p>About</p>
                <hr />               
            </div>
            <div className="pageBody">
                <div className="aboutField">
                    <p>
                        HockeyStats pulls live-updating, accurate stats directly from the NHL’s website. 
                        Whether its the latest games you want, or who won the Stanley Cup back in 1962, this bot is for you! 
                        <br />
                        <br />
                        Get player stats, game stats, schedules, draft information, and much more from an ever expanding list of commands.  
                        All from the comfort of your discord server.
                        <br/>
                        <br/>
                        Like the bot, and want to suppport its development? <a href="https://www.paypal.com/paypalme/hockeystatsbot" target="_blank" rel="noreferrer" className="inTextLink">Donate here!</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
