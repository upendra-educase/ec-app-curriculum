import React, { useState } from 'react'
import leftArrow from "../../../../images/leftArrow.svg"
import newcurriculamImage from "../../../../images/newcurriculam.svg"
import ButtonComponent from '../../../../components/button/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { Card, FormGroup } from 'react-bootstrap'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import "./NewCurriculam.css"

const NewCurriculam = () => {

    const navigation = useNavigate()

    const [newCurriculamState, setNewCurriculamState] = useState('basic-details')

    function handleCurriculamState() {
        if (newCurriculamState === 'basic-details') {
            setNewCurriculamState('content')
        } else if (newCurriculamState === 'content') {
            setNewCurriculamState('basic-details')
        }
    }

    return (
        <div>
            <div className='d-flex align-items-center gap justify-content-between p-2 mx-2' >
                <div className='d-flex .align-items-center gap'>
                    <div onClick={e => navigation(-1)} style={{ cursor: "pointer" }} >
                        <img src={leftArrow} />
                    </div>
                    <h2>
                        New Curriculum
                    </h2>
                </div>
                <ButtonComponent buttonType={'secondary'} title={'Take A Tour'} />
            </div>


            <Card className='m-4  ' >
                <div className='d-flex'>
                    <div className='d-flex flex-column new-curriculam-first-part-section  ' >
                        <div className='d-flex justify-content-between basic-details-content-div'>
                            <span onClick={e => handleCurriculamState()} style={{ color: newCurriculamState === 'basic-details' ? '#4D8EFF' : '#C4C4C4', borderBottom: newCurriculamState === 'basic-details' ? '4px solid #4D8EFF' : '#C4C4C4', cursor: 'pointer' }} >Basic Details</span>
                            <span onClick={e => handleCurriculamState()} style={{ color: newCurriculamState === 'content' ? '#4D8EFF' : '#C4C4C4', borderBottom: newCurriculamState === 'content' ? '4px solid #4D8EFF' : '#C4C4C4', cursor: 'pointer' }}>Content</span>
                        </div>
                        <div className='p-3 details-section'>
                            <CustomInput
                                placeholder={'Enter-Title'}
                            />



                        </div>
                        <div className='new-curriculam-sidebar-last'>
                            <div>
                                <div>
                                    <span>Private/Public</span>
                                    <span>Set the curriculum public  </span>
                                </div>
                            </div>
                            <div>
                                <ButtonComponent buttonType={'primary'} title={'Next'} />
                            </div>
                        </div>
                    </div>


                    <div className='d-flex flex-column gap justify-content-center align-items-center flex-grow-1 new-curriculam-second-part-section' >
                        <div>
                            <img src={newcurriculamImage} />
                        </div>
                        <p >Get started by simply clicking the <span>Next</span></p>
                    </div>


                </div>
            </Card>
        </div>
    )
}

export default NewCurriculam