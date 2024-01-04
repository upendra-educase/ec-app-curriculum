import React from 'react'
import Primarybutton from './PrimaryButton'
import Secondarybutton from './SecondaryButton'
import './button.css'

 const ButtonComponent = ({ title, type, onClick, disabled, buttonType, className, name, style, form, id }) => {
    return (<>
        {buttonType === "primary" ? (<>
            <Primarybutton
                type={type}
                title={title}
                onClick={onClick}
                className={className}
                style={style}
                name={name}
                id={id}
                form={form}
                disabled={disabled}
            />
        </>) : buttonType === "secondary" && (<>
            <Secondarybutton
                type={type}
                title={title}
                onClick={onClick}
                id={id}
                style={style}
                className={className}
                name={name}
                form={form}
                disabled={disabled}
            />
        </>)}
    </>)
}
export default ButtonComponent