import React from 'react'
import './Invite.css'
import { NavLink } from 'react-router-dom'

function Invite() {
    return (
        <div>
            <div className="inviteTitle">
                <p>Invite The Bot</p>
                <hr />
            </div>
            <div className="pageBody">
                <div className="inviteField">
                    <p>
                        Click <a 
                            href="https://discord.com/api/oauth2/authorize?client_id=735215611256373389&permissions=18432&scope=bot"
                            target="_blank"
                            className="inTextLink"
                            rel="noreferrer"
                            >HERE</a> to add the bot to your server. The bot only needs to be able to send messages in at least one chatroom.
                        <br />
                        <br />
                        Once the bot has been added, there are two commands to be run. 
                    </p>
                    <ol>
                        <li>
                            HS-info, this provides a link to all the commands and all relevant information about the commands.
                            Alternatively, you can go to the <NavLink
                                to="/commands"
                                className="inTextLink"
                                >Command List</NavLink> page.
                        </li>
                        <li>
                            HS-setTimezone, this will let you change the timezone of the server.
                            There are four options available, Eastern Time: ET, Central Tim: CT, Mountain Time: MT (default), and Pacific time: MT.
                            Simply run HS-setTimezone TIMEZONE CODE to change the timezone. Example: HS-setTimezone ET
                        </li>
                    </ol>
                
                </div>
            </div>
        </div>
    )
}

export default Invite
