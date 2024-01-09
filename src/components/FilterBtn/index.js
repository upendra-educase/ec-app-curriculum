import React, { useState } from 'react'
import { Card } from 'reactstrap'
import { X } from 'react-feather'
import { ReactComponent as Filter } from '../../images/filter.svg'
import SearchBox from '../SearchBox'
import CustomInputComponent from "../common/customInput";
import { ChevronRight } from 'react-feather'
import "./index.css"

const FilterBtn = () => {
    const [isActive, setIsActive] = useState(false)
    const [firstIndex, setFirstIndex] = useState(0)
    const [secondIndex, setSecondIndex] = useState(0)
    const [thirdIndex, setThirdIndex] = useState(0)
    const [listData, setListData] = useState(
        [
            {
                name: "School (12)", list: [
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    }
                ]
            },
            {
                name: "School (12)", list: [
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    }
                ]
            },
            {
                name: "School (12)", list: [
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    }
                ]
            },
            {
                name: "School (12)", list: [
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    }
                ]
            },
            {
                name: "School (12)", list: [
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    }
                ]
            },
            {
                name: "School (12)", list: [
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    },
                    {
                        name: "Maplewood Academy", list: [
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" },
                            { name: "Kolkata" }
                        ]
                    }
                ]
            }
        ]
    )
    return (
        <div>
            <div className='filter-btn-container rounded-pill' onClick={() => setIsActive(!isActive)}>
                <div>
                    <Filter />
                </div>
                <div>Filter</div>
            </div>
            <div className='position-absolute end-0 filter-dropbox'>
                {isActive && <Card>
                    <div className='d-flex justify-content-between align-items-center py-2 px-3'>
                        <div className='title'>Filter</div>
                        <div className='d-flex align-items-center'>
                            <SearchBox />
                            <X onClick={() => setIsActive(false)} className='ml-2' size={20} color='#C4C4C4' />
                        </div>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(219, 219, 219, 1)" }}>
                        <div className='filter-list-container d-flex justify-content-between px-3'>
                            <ul className='px-2' style={{ borderRight: "1px solid rgba(219, 219, 219, 1)" }}>
                                <div className='py-3'>
                                    {
                                        listData.map((io, i) => (<>
                                            <li onClick={() => { setFirstIndex(i); setThirdIndex(0); setSecondIndex(0) }} className={`d-flex ${firstIndex === i ? "actice-btn" : ''}`}>
                                                <CustomInputComponent
                                                    className='custom-control-Primary'
                                                    type="checkbox"
                                                    name="select-row-undefined"
                                                    ariaLabel="select-row-undefined"
                                                />
                                                <div className='px-2'>{io.name}</div>
                                                <ChevronRight />
                                            </li>
                                        </>))
                                    }
                                </div>
                            </ul>
                            <ul className='px-2' style={{ borderRight: "1px solid rgba(219, 219, 219, 1)" }}>
                                <div className='py-3'>
                                    {listData[firstIndex].list.map((io, i) => (<>
                                        <li onClick={() => { setSecondIndex(i); setThirdIndex(0) }} className={`d-flex ${secondIndex === i ? "actice-btn" : ''}`}>
                                            <CustomInputComponent
                                                className='custom-control-Primary'
                                                type="checkbox"
                                                name="select-row-undefined"
                                                ariaLabel="select-row-undefined"
                                            />
                                            <div className='px-2'>{io.name}</div>
                                            <ChevronRight />
                                        </li>
                                    </>))}
                                </div>
                            </ul>
                            <ul className='px-2'>
                                <div className='py-3'>
                                    {listData[firstIndex].list[secondIndex].list.map((io, i) => (<>
                                        <li onClick={() => setThirdIndex(i)} className={`d-flex ${thirdIndex === i ? "actice-btn" : ''}`}>
                                            <CustomInputComponent
                                                className='custom-control-Primary'
                                                type="checkbox"
                                                name="select-row-undefined"
                                                ariaLabel="select-row-undefined"
                                            />
                                            <div className='px-2'>{io.name}</div>
                                            {/* <ChevronRight /> */}
                                        </li>
                                    </>))}
                                </div>
                            </ul>
                        </div>
                    </div>

                </Card>}
            </div>
        </div>
    )
}

export default FilterBtn
