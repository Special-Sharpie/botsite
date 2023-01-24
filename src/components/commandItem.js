import React from 'react'

function CommandItem(props) {
    console.log(props.command)
    return (
        <>
            <h2 class="commandheader">{props.command}</h2>
            <div class="jumbotron hsbheadline">
                <p>{props.commandsJson[props.command][0]}</p>
                <br/>
                <p>{props.commandsJson[props.command][1]}</p>
            </div>
        </>
    )
}

export default CommandItem
