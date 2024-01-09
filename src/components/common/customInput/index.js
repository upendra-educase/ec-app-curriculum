import React from 'react'
import { Input } from "reactstrap"
// import "./index.css"

const CustomInputComponent = ({ type, className, id, onChange, disabled, invalid, readOnly, style, required, name, key, label, checked, innerRef, inline, ariaLabel, onClick, defaultChecked }) => {
    return (<>
        <Input
            type={type}
            key={key}
            className={`${className}`}
            id={`${id}`}
            onClick={onClick}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
            invalid={invalid}
            innerRef={innerRef}
            style={style}
            required={required}
            name={name}
            inline={inline}
            label={label}
            checked={checked}
            aria-label={ariaLabel}
            defaultChecked={defaultChecked}
        />
    </>)
}

CustomInputComponent.defaultProps = {
    type: "text",
    className: "",
    id: "",
    readOnly: false,
    disabled: false,
    invalid: false,
    required: false,
    name: ""
}

export default CustomInputComponent