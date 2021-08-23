import React from 'react'

const Header = ({handleToggleDarkMode}) =>{
    return (
        <div>
            <div className="header">
                <h1>Notes</h1>
                <button onClick={()=> 
                handleToggleDarkMode((previousDarkmode) => !previousDarkmode)}
                className="save">Toggle Mode</button>
            </div>
        </div>
    )
}
export default  Header;
