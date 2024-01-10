import React from 'react'
import './button.css'

const SecondaryButton = ({ title, type, onClick, disabled, className, name, style, form, id }) => {
    const widthFlag = typeof title === "string" ? title.length <= 10 : false
    return (<>
        <button
            className={`rounded-pill ${disabled ? "secondary-button-disabled" : "secondary-button"}`}
            style={{ width: widthFlag && "130px", ...style }}
            type={type}
            onClick={onClick}
            form={form}
            id={id}
            disabled={disabled}
            name={name}
        >
            {title}
        </button>
    </>)
}

export default SecondaryButton
