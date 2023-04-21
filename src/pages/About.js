import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <nav className="navbar navbar-expand-md  hsbnav">
                <a href="/" className="navbar-brand">
                    <img
                        className="logo"
                        src="/media/Hockey_Bot_Logo_lower.jpg"
                        alt="HockeyStata Bot logo"
                    />
                </a>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbaritems"
                    aria-controls="navbaritems"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbaritems">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="hsbnavlink hsbtitle">
                                HockeyStats Bot
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link hsbnavlink active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/invite" className="nav-link hsbnavlink">
                                Invite
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/commands"
                                className="nav-link hsbnavlink"
                            >
                                Commands
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-md">
                <div className="row justify-content-center upperpadding">
                    <div className="col-sm-4 row justify-content-center">
                        <img
                            className="botimage"
                            src="../media/Hockey_Bot_Logo_lower.jpg"
                            alt="HockeyStata Bot logo"
                        />
                    </div>
                    <div className="col-sm-8 upperpadding">
                        <h1>HockeyStats Bot</h1>
                        <p style={{ marginBottom: 0 }}>
                            A Discord bot dedicated to providing live-updating,
                            accurate hockey stats in your Discord server!{" "}
                        </p>
                    </div>
                </div>
                <div className="jumbotron hsbheadline">
                    <p>
                        HockeyStats pulls live-updating, accurate stats directly
                        from the NHL’s website. Whether its the latest games you
                        want, or who won the Stanley Cup back in 1962, this bot
                        is for you!
                        <br />
                        <br />
                        Now with support for Discord Slash commands, its easier
                        then ever to make requests! Whether its for Fantasy,
                        Trivia, or just trying to prove a friend wrong,
                        HockeyStats Bot will fit perfectly in your hockey server
                        or community!
                        <br />
                        <br />
                        Like the bot, and want to suppport its development?
                        Donate here!
                    </p>
                </div>
                <hr
                    className="hsbrule"
                    style={{ height: 5 + "px", border: "none" }}
                />
                <div className="row justify-content-evenly text-center uppermargin">
                    <div className="col-lg-6 justify-content-center alternatingtext">
                        <h2 className="hsbimagetext">
                            Get an overview of the day's games, and scores!
                        </h2>
                    </div>
                    <div className="col-lg-6 justify-content-center alternatingimage">
                        <img
                            className="hsbimage"
                            alt="Day Summary command example"
                            src="media/daySum.png"
                        />
                    </div>
                </div>
                <div className="row justify-content-evenly text-center uppermargin">
                    <div className="col-lg-6 justify-content-center alternatingimage">
                        <img
                            className="hsbimage"
                            alt="Player Info command example"
                            src="media/pinfo.png"
                        />
                    </div>
                    <div className="col-lg-6 justify-content-center alternatingtext">
                        <h2 className="hsbimagetext">
                            Trivia, and random facts about teams, players,
                            drafts and so much more!
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-evenly text-center uppermargin">
                    <div className="col-lg-6 justify-content-center alternatingtext">
                        <h2 className="hsbimagetext">
                            Keep tabs on the performance of you favourite
                            players!
                        </h2>
                    </div>
                    <div className="col-lg-6 justify-content-center alternatingimage">
                        <img
                            className="hsbimage"
                            alt="Player Stats command example"
                            src="media/pstats2.png"
                        />
                    </div>
                </div>
                <hr
                    className="hsbrule"
                    style={{ height: 5 + "px", border: "none" }}
                />
                <div className="jumbotron hsbheadline">
                    <p>
                        These barely scratch the surface of what the bot can do.
                        With an ever growing list of commands, its capabilities
                        will only get better!
                        <br />
                        So <a href="/invite">add the bot</a>, and join the
                        community!
                    </p>
                </div>
            </div>
            <footer>
                <hr className="hsbrule" />
                <div className="container-md bottommargin">
                    <div
                        className="jumbotron hsbheadline"
                        style={{ backgroundColor: "#212225" }}
                    >
                        <div
                            className="row justify-content-evenly bottommargin"
                            style={{ paddingTop: 1 + "em" }}
                        >
                            <div className="col-sm-4">
                                <h4 className="">
                                    The best way to reach us is to join our
                                    Discord server.
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
                                        <i
                                            className="fab fa-discord"
                                            style={{ marginRight: 10 + "px" }}
                                        ></i>
                                        Join server
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-4 bottommargin">
                                <a
                                    href="mailto:hockeystatsbot@gmail.com?subject=HockeyStats%20Bot%20Inquiry"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ fontSize: 20 + "px" }}
                                >
                                    <i className="fas fa-envelope contacticon"></i>{" "}
                                    Reach out to us by email
                                </a>
                            </div>
                            <div className="col-lg-4 bottommargin">
                                <a
                                    href="https://github.com/Special-Sharpie/HockeyStatsBot"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ fontSize: 20 + "px" }}
                                >
                                    <i className="fab fa-github contacticon "></i>{" "}
                                    Check us out on GitHub
                                </a>
                            </div>
                            <div className="col-lg-4 bottommargin">
                                <a
                                    href="https://www.paypal.com/paypalme/hockeystatsbot"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ fontSize: 20 + "px" }}
                                >
                                    <i className="fab fa-paypal contacticon"></i>{" "}
                                    Support us by donating
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default About;
