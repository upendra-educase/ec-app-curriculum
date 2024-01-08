import React from 'react'

const OptionIcon = ({ tableOptionArray, handleTableOption }) => {
    return (<>
        <div className='d-flex'>
            {tableOptionArray.length > 0 && (<>
                {tableOptionArray.map((item, index) => {
                    return (<>
                        <abbr
                            title={item.name} className="hover-table-option-style">
                            <div
                                className={`mr-1 ${item.className}`}
                                key={index}
                                onClick={() => handleTableOption(item)}
                            >
                                {item.icon}
                            </div>
                        </abbr>
                    </>)
                })}
            </>)}
        </div>
    </>)
}

export default OptionIcon