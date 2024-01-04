import React from 'react'
import { Card } from 'react-bootstrap'
import left from "../../../../images/left.svg"
import right from "../../../../images/right.svg"
import demo from "../../../../images/demo.svg"
import cross from "../../../../images/+.svg"
import ButtonComponent from '../../../../components/button/ButtonComponent'
import "./schoolRequest.css"
const SchoolRequest = () => {

    const schools = [
        {
            icon: demo,
            name: 'Maplewood Academy',
            curriculam_name: ' History Dynamics',

        },

        {
            icon: demo,
            name: 'Crestview High School',
            curriculam_name: 'Archelogy'
        }
    ]

    return (
        <Card className='p-4'style={{border:'none' , boxShadow: '0px 4px 20px 0px #001E521A',borderRadius:'20px'
    }}>
            <div className='d-flex justify-content-between school-request-section'>
                <span>School Requests</span>
                <div className='d-flex gap'>
                    <img src={left} />
                    <img src={right} />
                </div>
            </div>
            <div className='mt-4 d-flex flex-column '>
                {
                    schools.map((school, idx) => {
                        return (
                            <div className='d-flex justify-content-between  align-items-center mb-4'>
                                <div className='d-flex align-items-center gap' >
                                    <div>
                                        <img src={school.icon} />
                                    </div>
                                    <div className='school-name'>
                                        <h2>{school.name}</h2>
                                        <p style={{ color: '#838383' }}>Curriculum Name:<span style={{ color: "#000000" }}> {school.curriculam_name} </span></p>
                                    </div>
                                </div>
                                <div className='d-flex gap'>
                                    <ButtonComponent buttonType={"primary"} title={"Approve"} />
                                    <img src={cross} />
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className='d-flex justify-content-between  align-items-center mb-4'>
                    <div className='d-flex align-items-center gap' >
                        <div>
                            <img src={demo} />
                        </div>
                        <div className='school-name'>
                            <h2>Maplewood Academy</h2>
                            <p>Curriculum Name:<span> History Dynamics</span></p>
                        </div>
                    </div>
                    <div className='d-flex gap'>
                        <ButtonComponent buttonType={"primary"} title={"Approve"} />
                        <img src={cross} />
                    </div>
                </div>
                <div className='d-flex justify-content-between  align-items-center mb-4'>
                    <div className='d-flex align-items-center gap' >
                        <div>
                            <img src={demo} />
                        </div>
                        <div className='school-name'>
                            <h2>Maplewood Academy</h2>
                            <p>Curriculum Name:<span> History Dynamics</span></p>
                        </div>
                    </div>
                    <div className='d-flex gap'>
                        <ButtonComponent buttonType={"primary"} title={"Approve"} />
                        <img src={cross} />
                    </div>
                </div> */}
            </div>
        </Card>
    )
}

export default SchoolRequest