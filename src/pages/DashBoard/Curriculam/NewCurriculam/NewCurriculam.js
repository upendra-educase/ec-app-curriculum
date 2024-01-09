import React, { useState } from 'react'
import leftArrow from "../../../../images/leftArrow.svg"
import newcurriculamImage from "../../../../images/newcurriculam.svg"
import ButtonComponent from '../../../../components/button/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, FormGroup, Row } from 'react-bootstrap'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import "./NewCurriculam.css"
import DropDown from '../../../../components/DropDown/DropDown'
import CardWithImage from '../../../../components/common/CardWithImage'
import cross from '../../../../images/+.svg'
import AddLinkModal from '../../../../components/common/AddLinkModal'
import SchoolCard from '../../../../components/common/SchoolCard'
import Toggle from 'react-toggle'
import leftTiltedArrow from "../../../../images/leftTiltedArrow.svg"
import rightTiltedArrow from "../../../../images/rightTiltedArrow.svg"
import file from "../../../../images/addcuriculamfile.svg"
import ModalAssign from './ModaAssign'
import { element, func } from 'prop-types'
import CustomInputComponent from '../../../../components/common/customInput'
import crossArrow from "../../../../images/crossarrow.svg"
import downArrow from '../../../../images/downarrow.svg'
import completed from "../../../../images/completed.svg"
import pdf from '../../../../images/pdf.svg'

const NewCurriculam = () => {

    const navigation = useNavigate()

    const [newCurriculamState, setNewCurriculamState] = useState('basic-details')
    const [country, setCountry] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null);
    const [isActive, setIsActive] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [addFiles , setAddFiles] = useState(false)


    function handleDropdown(countryName) {
        setCountry(countryName)
    }

    const [subjectArray, setSubjectArray] = useState([])
    const addFilesArray = [{}, {}]

    function handleSubjectInput(e) {
        const newArray = [...subjectArray];
        newArray.push("");
        setSubjectArray(newArray);
    }

    function handleCurriculamState() {
        if (newCurriculamState === 'basic-details') {
            setNewCurriculamState('content')
        } else if (newCurriculamState === 'content') {
            setNewCurriculamState('basic-details')
        }
    }

    function handleFiles(e) {
       setAddFiles(!addFiles)
       console.log(addFiles)
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
                <div className='d-flex'>
                    <div className='d-flex flex-column new-curriculam-first-part-section  ' >
                        <div className='d-flex justify-content-between basic-details-content-div'>
                            <span onClick={e => handleCurriculamState()} style={{ color: newCurriculamState === 'basic-details' ? '#4D8EFF' : '#C4C4C4', borderBottom: newCurriculamState === 'basic-details' ? '4px solid #4D8EFF' : '#C4C4C4', cursor: 'pointer' }} >Basic Details</span>
                            <span onClick={e => handleCurriculamState()} style={{ color: newCurriculamState === 'content' ? '#4D8EFF' : '#C4C4C4', borderBottom: newCurriculamState === 'content' ? '4px solid #4D8EFF' : '#C4C4C4', cursor: 'pointer' }}>Content</span>
                        </div>
                        {
                            newCurriculamState === 'basic-details' ? <div className='p-3 details-section d-flex flex-column gap'>
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
                                <DropDown

                                    options={category}
                                    placeholder="Select Category"
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    isClearable={true}
                                    id={'selectCategory'}
                                />
                                <DropDown

                                    options={category}
                                    placeholder="Select Category"
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    isClearable={true}
                                    id={'selectCategory'}
                                />


                            </div> :
                                <div>
                                    <div>
                                        {
                                            subjectArray.length > 0 ? subjectArray.map((element, idx) => {
                                                return (
                                                    <div className={`d-flex flex-column gap px-2 mb-2 ${idx === 0 ? 'mt-2' : ""}`}>
                                                        <CustomInput
                                                            placeholder={'Add Subject'}
                                                            className={'curriculam-side-subject-section'}
                                                        />
                                                    </div>
                                                )
                                            }) : null
                                        }
                                    </div>
                                    <div className='d-flex flex-column px-2 mb-4'>
                                        <span style={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#4D8EFF",
                                            cursor: 'pointer',
                                            margin: '0'

                                        }} onClick={e => handleSubjectInput()} >New Part</span>
                                        <CustomInput
                                            placeholder={'Add New Part'}
                                            className={'curriculam-side-subject-section'}
                                        />
                                    </div>

                                </div>
                        }
                        <div className='new-curriculam-sidebar-last'>
                            <div className='d-flex justify-content-between align-items-center mb-4 gap'>
                                <div className='d-flex flex-column' >
                                    <span className='private-public-span'>Private/Public</span>
                                    <span className='setcurriculam-span'>Set the curriculum public  </span>
                                </div>
                                <div><>
                                    <div className='toggle-div-style' style={{ fontSize: "12px" }}>
                                        <Toggle
                                            defaultChecked={true}
                                            icons={{
                                                checked: "Active",
                                                unchecked: "Inactive"
                                            }}
                                            onChange={() => {
                                                setIsActive(!isActive)
                                            }
                                            }
                                            // checked={isActive.includes(i)}
                                            checked={isActive}
                                        />
                                    </div>
                                </></div>
                            </div>
                            {
                                newCurriculamState === 'basic-details' ?
                                    <div>
                                        <button type="button" className="btn btn-primary w-100 py-2">Next</button>
                                    </div> :
                                    <div>
                                        <button type="button" className="btn btn-primary w-100 py-2" onClick={e => setIsModalOpen(true)}>Publish</button>
                                    </div>
                            }
                        </div>
                    </div>


                    {
                        newCurriculamState === 'basic-details' ? <div className='d-flex flex-column gap justify-content-center align-items-center flex-grow-1 new-curriculam-second-part-section' >
                            <div>
                                <img src={newcurriculamImage} />
                            </div>
                            <p >Get started by simply clicking the <span>Next</span></p>
                        </div> :
                            <div className=' d-flex gap flex-wrap flex-column flex-grow-1 new-curriculam-second-part-section p-4' style={{ position: 'relative' }} >
                                <div className=' d-flex gap flex-wrap justify-content-between align-items-center' >
                                    <div className='d-flex gap align-items-center add-curriculam-section-div'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img src={file} />
                                        </div>
                                        <h2>Add Curriculum </h2>
                                    </div>
                                    <div className='d-flex gap'>
                                        <img src={leftTiltedArrow} style={{ cursor: 'pointer' }} />
                                        <img src={rightTiltedArrow} style={{ cursor: 'pointer' }} />
                                    </div>
                                </div>
                                <div className='d-flex gap' >
                                    <CardWithImage />
                                    <CardWithImage />
                                </div>
                                <div className='d-flex justify-content-end flex-column gap'>
                                    <div style={{ alignSelf: 'flex-end' }}><ButtonComponent buttonType={'primary'} title={'Add Files'} onClick={e => handleFiles(e)} /></div>
                                    <div className={`pop-over  rounded ${addFiles ? '' : 'hidebox'}`} style={{ boxShadow: "0px 0px 12px 0px #002D7D33", minWidth: '300px', alignSelf: 'flex-end' }}>
                                        <div className='d-flex justify-content-between align-items-center p-2  border-bottom' >
                                            <div className='pop-over-files-details'>2 Files Uploading</div>
                                            <div className='d-flex align-items-center'>
                                                <div><img src={downArrow} /></div>
                                                <div style={{ cursor: 'pointer' }} onClick={e => setAddFiles(!addFiles)}><img src={crossArrow} /></div>
                                            </div>
                                        </div>
                                        <div className={`p-2 d-flex flex-column `} >


                                            {
                                                addFilesArray.map((element, idx) => {
                                                    return (
                                                        <div className='d-flex justify-content-between align-items-center mb-2'>
                                                            <div className='d-flex align-items-center gap'>
                                                                <div><img src={pdf} /></div>
                                                                <div style={{
                                                                    fontSize: "12px",
                                                                    fontWeight: "500",
                                                                    color: "#838383"

                                                                }} >History.pdf</div>
                                                            </div>
                                                            <div><img src={completed} /></div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }


                </div>
            </Card >
            {/* <CardWithImage />

            <AddLinkModal />

            <SchoolCard /> */}

            < ModalAssign isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

        </div >
    )
}

export default NewCurriculam