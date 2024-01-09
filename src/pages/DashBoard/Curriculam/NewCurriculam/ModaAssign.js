import React from 'react'
import { Card, Col, Modal, ModalBody, Row } from 'reactstrap'
import ButtonComponent from '../../../../components/button/ButtonComponent'
import DropDown from '../../../../components/DropDown/DropDown'
import leftArrow from "../../../../images/leftArrow.svg"
import { FaRegFolderClosed } from "react-icons/fa6";
import { X } from 'react-feather'
import "./NewCurriculam.css"

const ModalAssign = ({ isOpen, setIsOpen }) => {


    return (
        <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} className="modal-lg" centered={true}>
            <div className='d-flex justify-content-between align-items-center p-4 flex-wrap'>
                <div className='d-flex justify-content-between align-items-center gap' >
                    <div className='d-flex justify-content-center align-items-center left-arrow-image' onClick={() => setIsOpen(!isOpen)}>
                        <img src={leftArrow} />
                    </div>
                    <h2>Published Successfully</h2>
                </div>
                <div onClick={e => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                    <X size={30} color='#C4C4C4' strokeWidth={3.5} />
                </div>
            </div>
            <ModalBody>
                <div className='curriculam-modal-section-part1 p-4 mb-2'>
                    <h2 style={{ color: ' #4D8EFF' }}>Simple Machines</h2>
                    <p>Category : <span>Sem</span></p>
                    <p>Grade : <span>1st Grade</span></p>
                </div>
                <div className='p-4 mb-2'>
                    <div className=' curriculam-modal-section-part2 border rounded p-2 px-3'>
                        <p>Parts : <span>1</span></p>
                        <p>Sub Parts : <span>15</span></p>
                        <p>Attachments : <span>01</span></p>
                        <p>Links : <span>01</span></p>
                    </div>
                </div>
                <div className='d-flex justify-content-end px-4'>
                    <ButtonComponent buttonType={'secondary'} title={'promote'} />
                </div>
                {/* <Row className='mb-2'>
                    <Col>
                    <DropDown
                    placeholder={<><FaRegFolderClosed color='#C4C4C4' size={20} /> <span className='px-2'>Select Curriculum</span></>}
                    />
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                    <DropDown/>
                    </Col>
                    <Col>
                    <DropDown/>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="d-flex justify-content-end">
                        <ButtonComponent buttonType={'primary'} title={'Add'} />
                        </div>
                    </Col>
                </Row> */}
            </ModalBody>

        </Modal>
    )
}

export default ModalAssign