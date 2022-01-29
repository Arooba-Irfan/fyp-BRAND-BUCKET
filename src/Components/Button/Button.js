import React from 'react'
import "./Button.css"
import Paragraph from '../Paragraph/Paragraph'

const Button = ({children, background="purple", style={}, color="white",fontSize,fontWeight, disabled=false, ...restProps}) => {
    return (
        <button disabled={disabled} {...restProps} style={{background: disabled?"lightgray" : background ,color, ...style, }} className="button">
            <Paragraph color fontSize={fontSize} fontWeight={fontWeight}>{children}</Paragraph>
        </button>
    )
}

export default Button
