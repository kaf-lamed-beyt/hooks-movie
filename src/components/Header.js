import React from 'react' 

export default function Header (props) {
    return (    
        <header className="app__head">
            <h2>{props.text}</h2>
        </header>
    )
}