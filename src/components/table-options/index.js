import React from 'react'
import OptionDropdown from './OptionDropdown'
import OptionIcon from './OptionIcon'
import "./index.css"

const TableOptions = ({ optionType, tableOptionArray, handleTableOption, isButton, buttonText, buttonType, handleTour }) => {
    return (<div onClick={handleTour}>
        {optionType === "optionDropdown" ? (<>
            <OptionDropdown
                tableOptionArray={tableOptionArray}
                handleTableOption={handleTableOption}
                isButton={isButton}
                buttonText={buttonText}
                buttonType={buttonType}
            />
        </>) : optionType === "optionIcon" && (<>
            <OptionIcon
                tableOptionArray={tableOptionArray}
                handleTableOption={handleTableOption}
            />
        </>)}
    </div>)
}

TableOptions.defaultProps = {
    optionType: "optionDropdown",
    tableOptionArray: []
}
export default TableOptions