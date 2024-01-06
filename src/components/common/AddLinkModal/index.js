import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import CustomInput from '../../CustomInput/CustomInput'
import ButtonComponent from '../../button/ButtonComponent'
import cross from "../../../images/+.svg"
import './index.css'

const AddLinkModal = () => {

    const [selectedOption, setSelectedOption] = useState('option1')

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    console.log(selectedOption)
    return (
        <Card style={{
            width: " 433px",
            height: "280px",
            padding: "1.2rem 1rem",

        }} >
            <div className='d-flex flex-column gap' >
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#838383"


                    }} >Add Link</h1>
                    <div><img src={cross} /></div>
                </div>
                <div className='d-flex gap align-items-center'>
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleRadioChange}
                            style={{ marginRight: "0.5rem" }}
                        />
                        Link
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleRadioChange}
                            style={{ marginRight: "0.5rem" }}
                        />
                        Local
                    </label>
                </div>

                {
                    selectedOption === 'option1' ? <><CustomInput
                        placeholder={'Link Title'}
                        className={'w-100 add-link-modal-input '}
                    />
                        <CustomInput
                            placeholder={'URL Link'}
                            className={'w-100 add-link-modal-input '}
                        />
                        <div className='d-flex gap button-part-addlinkmodal'>
                            <ButtonComponent buttonType={'secondary'} title={'Embed'} />
                            <ButtonComponent buttonType={'primary'} title={'save'} />
                        </div></> :

                        <>
                            <div style={{position:"relative"}} >
                                <CustomInput
                                    className={'w-100  add-local-input-section '}
                                />
                              <div style={{position:'absolute', right:"10px", bottom:"10px"}} >  <ButtonComponent buttonType={'secondary'} title={'Browser'} /></div>
                            </div>
                          <div className='last-btn-local-section' >  <ButtonComponent buttonType={'primary'} title={'Save'} /></div>
                        </>
                }
            </div>
        </Card>
    )
}

export default AddLinkModal