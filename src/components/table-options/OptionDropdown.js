import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreHorizontal } from 'react-feather'
import ButtonComponent from "../button/ButtonComponent"
const OptionDropdown = ({ tableOptionArray, handleTableOption, isButton, buttonText, buttonType, handleTour }) => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    return (<div onClick={handleTour}>
        <Dropdown
            isOpen={dropdownIsOpen}
            toggle={(e) => {
                if (e.target.className !== "dropdown-item") {
                    setDropdownIsOpen(!dropdownIsOpen)
                }
            }}
        >
            <DropdownToggle
                onClick={(e) => {
                    setDropdownIsOpen(!dropdownIsOpen)
                }}
                tag="span"
                className='mouse-pointer'
            >
                {isButton === true ? (<>
                    <ButtonComponent
                        type="button"
                        title={buttonText}
                        buttonType={buttonType}
                    />
                </>) : (<div className='d-flex justify-content-center align-items-center' style={{ width: "29.62px", height: "29px", borderRadius: "50%", backgroundColor: "#eeeeee" }}>
                    <MoreHorizontal color='#649DFF' size={16} />
                </div>)}
            </DropdownToggle>
            {tableOptionArray.length > 0 && (<>
                <DropdownMenu className='dropdown-menu-tour'>
                    {tableOptionArray.map((item, index) => {
                        return (<>
                            <DropdownItem key={index}>
                                <div
                                    className={`d-flex ${item.className}`}
                                    onClick={() => {
                                        handleTableOption(item)
                                        setDropdownIsOpen(!dropdownIsOpen)
                                    }}
                                >
                                    <div style={{ marginRight: "10px" }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            </DropdownItem>
                        </>)
                    })}
                </DropdownMenu>
            </>)}
        </Dropdown>
    </div>)
}

export default OptionDropdown