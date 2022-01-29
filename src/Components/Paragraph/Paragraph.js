import React from 'react'
import "./Paragraph.css"

const Paragraph = ({children,fontSize=16, fontWeight="regular",style={},color="black",...restProps}) => {

    var fontWeightEstimator = (weight) => {
        switch (weight) {
            case "light":
                return 300;
            case "regular":
                return 400;
            case "semi-bold":
                return 600;
            case "bold":
                return 700;
            default:
                return 400
        }
    }
    var fontWeightValue = fontWeightEstimator(fontWeight)
    var fontSizeValue = fontSize/10
    return (
        <div className="paragraph" {...restProps} style={{fontWeight:fontWeightValue,fontSize:`${fontSizeValue}em`,...style,color}}>
            {children}
        </div>
    )
}

export default Paragraph
