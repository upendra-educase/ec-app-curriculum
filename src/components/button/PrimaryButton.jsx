import React from 'react'
import './button.css'

const PrimaryButton = ({ title, type, onClick, disabled, className, name, style, form, id }) => {
    const widthFlag = typeof title === "string" ? title.length <= 10 : false
    const backgroundColor= "#4D8EFF"
    return (<>
        <button
            className={`${disabled ? "primary-button-disabled" : "primary-button"} ${className}`}
            style={{ width: widthFlag && "110px", backgroundColor, ...style }}
            type={type}
            form={form}
            onClick={onClick}
            id={id}
            disabled={disabled}
            name={name}
        >
            {title}
        </button>
    </>)
}

export default PrimaryButton
