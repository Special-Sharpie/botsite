import React from 'react'

function commandItem(props) {
    return (
        <>
            <div className="commandFieldGrid">
                <h1>{props.commandName}</h1>
            </div>                    
            <div className="commandFieldGrid">
                <p>
                    {props.desc}
                    <br/>
                    <br/>
                    {props.example}
                </p>
            </div>
        </>
    )
}

export default commandItem
