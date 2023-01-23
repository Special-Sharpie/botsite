import React from 'react'

function Commands() {
    // async function commandsList(){
    //     let ls = document.getElementById("commandList")
    //     var getCommands = await fetch('media/commanddesc.json')
    //     var commandsJson = await getCommands.json()
    //     for (let command in commandsJson){
    //         ls.append(`<h2 className="commandheader">${command}</h2><div className="jumbotron hsbheadline"><p>${commandsJson[command][0]}</p><br/><p>${commandsJson[command][1]}</p></div>`)
    //     }
    // }
    // commandsList()
    
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
                            <a href="/invite" className="nav-link hsbnavlink">Invite</a>
                        </li>
                        <li className="nav-item">
                            <a href="/commands" className="nav-link hsbnavlink active">Commands</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-md" id="commandList">
                <div className="jumbotron hsbheadline">
                    <p>This a list of all currently available commands, what the do, and how to use them. This information can also be viewed in the Slash Commands menu in discord.</p>
                    <br />
                    <p>If you have an idea for a command that is not listed here, submit a suggestion in the suggestion forum in our new HockeyStats Bot Discord Server!</p>
                </div>
                <hr className="hsbrule" style={{height: 5+'px', border: 'none'}}/>
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

export default Commands
