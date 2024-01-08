import React, { useState } from 'react'
import leftArrow from "../../../../images/leftArrow.svg"
import newcurriculamImage from "../../../../images/newcurriculam.svg"
import ButtonComponent from '../../../../components/button/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, FormGroup } from 'react-bootstrap'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import "./NewCurriculam.css"
import DropDown from '../../../../components/DropDown/DropDown'
import CardWithImage from '../../../../components/common/CardWithImage'
import cross from '../../../../images/+.svg'
import AddLinkModal from '../../../../components/common/AddLinkModal'
import SchoolCard from '../../../../components/common/SchoolCard'

const NewCurriculam = () => {

    const navigation = useNavigate()

    const [newCurriculamState, setNewCurriculamState] = useState('basic-details')
    const [country, setCountry] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null);

    function handleDropdown(countryName) {
        setCountry(countryName)
    }

    function handleCurriculamState() {
        if (newCurriculamState === 'basic-details') {
            setNewCurriculamState('content')
        } else if (newCurriculamState === 'content') {
            setNewCurriculamState('basic-details')
        }
    }

    const category = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'kitkat', label: 'KitKat' },
        { value: '5-star', label: '5-Star' },
        { value: 'bunch', label: 'Bunch' },
    ];

    
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
                <div className='d-flex flex-wrap'>
                    <div className='d-flex flex-column new-curriculam-first-part-section  ' >
                        <div className='d-flex justify-content-between basic-details-content-div'>
                            <span onClick={e => handleCurriculamState()} style={{ color: newCurriculamState === 'basic-details' ? '#4D8EFF' : '#C4C4C4', borderBottom: newCurriculamState === 'basic-details' ? '4px solid #4D8EFF' : '#C4C4C4', cursor: 'pointer' }} >Basic Details</span>
                            <span onClick={e => handleCurriculamState()} style={{ color: newCurriculamState === 'content' ? '#4D8EFF' : '#C4C4C4', borderBottom: newCurriculamState === 'content' ? '4px solid #4D8EFF' : '#C4C4C4', cursor: 'pointer' }}>Content</span>
                        </div>
                        <div className='p-3 details-section d-flex flex-column gap'>
                            <CustomInput
                                placeholder={'Enter Title'}
                                className={'w-100 curriclam-side-input-section'}
                            />
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Enter Description'></textarea>
                            
                            <DropDown

                                options={category}
                                placeholder="Select Category"
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                isClearable={true}
                                id={'selectCategory'}
                            />

                        </div>
                        <div className='new-curriculam-sidebar-last'>
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div className='d-flex flex-column' >
                                    <span className='private-public-span'>Private/Public</span>
                                    <span className='setcurriculam-span'>Set the curriculum public  </span>
                                </div>
                                <div>Toggle button</div>
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary w-100 py-2">Next</button>
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
            {/* <CardWithImage />

            <AddLinkModal />

            <SchoolCard /> */}


        </div>
    )
}

export default NewCurriculam