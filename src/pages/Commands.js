import React from 'react'
import './Commands.css'

function Commands() {
    return (
        <div>
            <div className="commmandTitle">
                <p>Command List</p>
                <hr />
            </div>
            <div className="pageBody">
                <div className="commandField">
                    <p>
                        Here you will find all the available commands for the bot, what they do, and how to properly pass all the required arguments. 
                        We intend to continually add new features and commands to the bot as time goes on, this page will document them all as they are released.
                    </p>
                </div>
                <div className="gridContainer">
                    <div className="commandFieldGrid">
                        <p>hello</p>
                    </div>
                    <div className="commandFieldGrid">
                        <p>hello</p>
                    </div>
                    <div className="commandFieldGrid">
                        <p>hello</p>
                    </div>
                    <div className="commandFieldGrid">
                        <p>hello</p>
                    </div>
                    <div className="commandFieldGrid">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commands
