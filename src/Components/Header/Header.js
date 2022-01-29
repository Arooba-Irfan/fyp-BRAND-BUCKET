import React from 'react'
import "./Header.css"

const Header = ({children,fontSize=16, fontWeight="bold",style={},color="black"}) => {

    var fontWeightEstimator = (weight) => {
        switch (weight) {
            case "light":
                return 300;
            case "regular":
                return 400;
            case "semi-bold":
                return 500;
            case "bold":
                return 700;
            default:
                return 400
        }
    }
    var fontWeightValue = fontWeightEstimator(fontWeight)
    var fontSizeValue = fontSize/10
    return (
        <div className="header" style={{fontWeight:fontWeightValue,fontSize:`${fontSizeValue}em`,...style,color}}>
            {children}
        </div>
    )
}

export default Header
