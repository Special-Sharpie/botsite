import React from 'react'
import CommandItem from '../components/CommandItem'
import './Commands.css'

let commandDescription = {
    "HS-teamWL" : ["This command returns the current season Win/loss/OT record for the requested team, requiring 1 parameter, the teams Abbreviation.", "Example: HS-teamWL CGY"],
    "HS-lifeWL" : ["This command returns the lifetime Win/Loss at home, on the road, stats between two teams. This requires two parameters, the first Abbreviation, and second Abbreviation.", "Example: HS-lifeWL CGY EDM"],
    "HS-Pstats" : ["This command returns the most relevant stats for each player. This takes three parameters, the name which is required, a season, and a season type character (both of which are optional).", "Example: HS-Pstats JacobMarkstrom or HS-Pstats ConnorMcDavid 20192020 P"], 
    "HS-Gnext" : ["This command returns the next game date for the requested team, checking the next 10 days from the date the command was run. It only requires one parameter, a team Abbreviation.", "Example: HS-Gnext CGY"],
    "HS-Glast" : ["This command returns the last game date played by the requested team, checking the last 10 days from the date the command was run. It only requires one parameter, a team Abbreviation.", "Example: HS-Glast CGY"],
    "HS-Gtoday" : ["This command returns some info about the game of that current day of the requested team. It will return the game's matchup, and game stats as they become available. It only requires one parameter, a team ID.", "Example: HS-Gtoday CGY"],
    "HS-divStandings" : ["(Being re-worked. Does not return proper data.)This command returns the current season’s, and only he current season’s, divisional standings. This requires one parameter, the division. The 2020-2021 season has brought us new division. The accepted format of the division name is as follows: CENTRAL: Central, EAST: East, NORTH: North, WEST: West.", "N/A"],
    "HS-confStandings" : ["This command returns the current season’s, conference standings. This requires one parameter, the conference(Eastern, Western).", "Example: HS-confStandings Western"],
    "HS-leagueStandings" : ["This command returns the standings for the entire league, and can be run for any season in NHL history. This command has no required parameters, but can be passed an optional season.", "Example: HS-leagueStandings or Hs-leagueStandings 20182019"],
    "HS-playoffStandings" : ["This command returns the data of any requested playoff series, from any round, during any season. It will return the team matchup, as well as the record for the series. This command requires three parameters, a team abbreviation, a playoff round (SCQ, R1, R2, CF, SCF), and the season. Note, SCQ only works for the 20192020 qualifier round.", "Exmaple: HS-playOffstandings CGY SCQ 20192020"],
    "HS-daySummary" : ["Returns a rundown of all games happening on the requested day. Can be passed an optional parameter Date (YYYY-MM-DD).", "Example: HS-daySummary or HS-daySummary 2021-10-29"],
    "HS-skaterCareer" : ["Returns the entire NHL career of the requested player. NOTE: This command returns a lot of data, and only works with active players. Use HS-ATplayerStats for non active players.", "Example: HS-skaterCareer ZdenoChara"],
    "HS-next7" : ["Returns the schedule of the requested team over the following 7 days, giving the user the date and time of the upcoming in that over that period. Parameters: Team Abbreviation.", "Example: HS-next7 CGY."],
    "HS-perGame" : ["Returns a player's stat over total games played. Takes two parameters, a player, and a stat. Use HS-statCodes for all stat codes.", "Example: HS-perGame EliasLindholm points"],
    "HS-setTimezone" : ["Updates the preferred timezone of the requestion server to change the timezone, run the command, and pass it a timezone code. The codes are: EASTERN TIME: ET, CENTRAL TIME: CT, MOUNTAIN TIME: MT, and PACIFIC TIME: PT.", "Example: HS-setTimezone ET"],
    "HS-draftByYear" : ["Returns all draft picks of the requested team from the requested year.", "Exmaple: HS-draftByYear NYR 2020."],
    "HS-Pinfo" : ["Returns a suite of information about the requested player.", "Example HS-Pinfo JohnnGaudreau"],
    "HS-Tinfo" : ["Returns a suite of information about the requested team.", "Example HS-Tinfo CGY"],
    "HS-ATplayerStats" : ["Returns the career stats of all active and unactive NHL players. Similar to skaterCareer, only with less data and support for goalies.", "Example: HS-ATplayerStats JaromeIginla"],
    "HS-statLeaders" : ["Returns the highest scorers of the requested stat from high to low, takes the team abbreviation, how many places (top 10, top 5 etc) and the stat, which defaults to points.", "Example: HS-statLeaders CGY 10 goals"],
    "HS-singleStat" : ["Returns a single requested stat. Takes 3 parameters, a player name, a stat code, and a season which is optional. Use HS-statCodes for all stat codes.", "Example: HS-singleStat BlakeColeman faceOffPct 20202021"],
    "HS-commandHistory" : ["Sends the requesting a user a JSON file with all the command attempts after version 1.4.0.", "Example: HS-commandHistory"],
    "HS-info" : ["Sends the user resources for navigating the bot.", "Example:HS-Info"]
}


function Commands() {
    let commandsList = []
    let i = 0
    for (var key in commandDescription){
        let commandName = key;
        let desc = commandDescription[key][0];
        let example = commandDescription[key][1]
        commandsList.push(<CommandItem commandName={commandName} desc={desc} example={example} key={i} />)
        i += 1
        
        }
    
    return (
        <div  className="page" > 
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
                    {commandsList}
                </div>
            </div>
        </div>
    )
}

export default Commands
