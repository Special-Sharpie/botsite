import React from 'react'


function Invite() {
    return (
        <>
            <nav className="navbar navbar-expand-md  hsbnav">
                <a href="/" className="navbar-brand"><img className="logo" src="/media/Hockey_Bot_Logo_lower.jpg" alt=''/></a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbaritems" aria-controls="navbaritems" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>  
                <div className="collapse navbar-collapse" id="navbaritems">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a href="/" className="nav-link hsbnavlink hsbtitle">HockeyStats Bot</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link hsbnavlink ">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/invite" className="nav-link hsbnavlink active">Invite</a>
                        </li>
                        <li className="nav-item">
                            <a href="/commands" className="nav-link hsbnavlink">Commands</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-md">
                <div className="row justify-content-evenly upperpadding">
                    <div className="col-sm-4 text-center">
                        <h2 className="">
                            Add HockeyStats Bot 
                            to your Discord server
                        </h2>
                    </div>
                    <div className="col-sm-4 text-center invitebtncol">
                        <a                         
                            href="https://discord.com/api/oauth2/authorize?client_id=735215611256373389&permissions=2147534848&scope=applications.commands%20bot"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <button className="btn btn-primary invitebtn">
                                <i className="fab fa-discord" style={{marginRight: 10+'px'}}></i> 
                                Add to server 
                            </button>
                        </a>
                    </div>
                </div>
                <div className="jumbotron hsbheadline uppermargin">
                    <h4>
                        After inviting the bot, make sure you:
                    </h4>
                    <ol>
                        <li>
                            Visit the <a href="/commands">commands list</a> page, or type / in your server and select "HockeyStats" from the list to see all the commands that the bot has to offer!
                        </li>
                        <li>
                            Run /settimezone, and chose of the many options to change the times to be best suited for you server!
                        </li>
                        <li>
                            Run /whatsnew to keep tabs on all new additions and changes!
                        </li>
                    </ol>
                    <p>
                        Don't forget to join our new discord server and leave any question, feedback or suggestions! Find the link <a href="/contact">here!</a>
                    </p>
                </div>
            </div>
            <footer>
                <hr className="hsbrule"/>
                <div className="container-md bottommargin" >
                    <div className="jumbotron hsbheadline" style={{backgroundColor: '#212225'}}>
                        <div className="row justify-content-evenly bottommargin" style={{paddingTop: 1+'em'}}>
                            <div className="col-sm-4">
                                <h4 className="">
                                    The best way to reach us is to join our Discord server.
                                    <br />
                                </h4>
                            </div>
                            <div className="col-sm-4 text-center">
                                <a                         
                                    href="https://discord.gg/fkVbVutRgt"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <button className="btn btn-primary invitebtn">
                                        <i className="fab fa-discord" style={{marginRight: 10+'px'}}></i> 
                                        Join server 
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-4 bottommargin" >
                                <a href="mailto:hockeystatsbot@gmail.com?subject=HockeyStats%20Bot%20Inquiry" target="_blank" rel="noreferrer" style={{fontSize: 20+'px'}}><i className="fas fa-envelope contacticon" ></i> Reach out to us by email</a>
                            </div>
                            <div className="col-lg-4 bottommargin" >
                                <a href="https://github.com/Special-Sharpie/HockeyStatsBot" target="_blank" rel="noreferrer" style={{fontSize: 20+'px'}}><i className="fab fa-github contacticon " ></i> Check us out on GitHub</a>
                            </div>
                            <div className="col-lg-4 bottommargin" >
                                <a href="https://www.paypal.com/paypalme/hockeystatsbot" target="_blank" rel="noreferrer" style={{fontSize: 20+'px'}}><i className="fab fa-paypal contacticon"></i> Support us by donating</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Invite
