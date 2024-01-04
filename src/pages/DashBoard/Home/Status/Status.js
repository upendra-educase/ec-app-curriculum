import React from 'react'
import { Card } from 'react-bootstrap'
import search from "../../../../images/search.svg"
import file from "../../../../images/file.svg"
import right from "../../../../images/right.svg"
import "./status.css"
import ButtonComponent from '../../../../components/button/ButtonComponent'
const Status = () => {

    const subject = [
        {
            name: "History Dynamics",
            active:18,

        },
        {
            name: "Archelogy",
            active:45,

        },
        {
            name: "English Compositions",
            active:16,

        },
    ]

    return (
        <Card className='mt-4 p-4 rounded'>

            <div className='d-flex justify-content-between align-items-center  status-section-upper-div' >
                <h1>Status</h1>
                <div className='status-search-section'>
                    <img src={search} />
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            <div className='status-section-lower-div mt-5 flex-column'>
                {
                    subject.map((element,ind) => {
                        return(
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='d-flex justify-content-between align-items-centern gap'>
                        <div className='status-section-lower-div-image'>
                            <img src={file} />
                        </div>
                        <div className='subject-status'>
                            <h3>{element.name}</h3>
                            <p style={{ color: '#838383' }}>Activate: <span style={{ color: '#1D1D17' }}>{element.active}</span></p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center  gap' >
                        <ButtonComponent buttonType={"secondary"} title={'Details'} />
                        <div>
                            <img src={right} />
                        </div>
                    </div>
                </div>
                        )
                    })
                }
                {/* <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-centern gap'>
                        <div className='status-section-lower-div-image'>
                            <img src={file} />
                        </div>
                        <div className='subject-status'>
                            <h3>History Dynamics</h3>
                            <p style={{ color: '#838383' }}>Activate: <span style={{ color: '#1D1D17' }}>18</span></p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center  gap' >
                        <ButtonComponent buttonType={"secondary"} title={'Details'} />
                        <div>
                            <img src={right} />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-centern gap'>
                        <div className='status-section-lower-div-image'>
                            <img src={file} />
                        </div>
                        <div className='subject-status'>
                            <h3>History Dynamics</h3>
                            <p style={{ color: '#838383' }}>Activate: <span style={{ color: '#1D1D17' }}>18</span></p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center  gap' >
                        <ButtonComponent buttonType={"secondary"} title={'Details'} />
                        <div>
                            <img src={right} />
                        </div>
                    </div>
                </div> */}
            </div>
        </Card>
    )
}

export default Status