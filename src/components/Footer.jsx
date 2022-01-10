import React, { Fragment } from 'react';
class Footer extends React.Component{
    render(){
        const customStyle ={
            backgroundColor : "yellow",
            padding: "20px",
            fontFamily: "arial",
            color : "black",
            fontSize: "10px"

            
        }
        return(
            <div style={customStyle}>
                <h2>LOGO</h2>
           
            </div>
        )
    }
}

export default Footer;