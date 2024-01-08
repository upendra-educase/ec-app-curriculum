import React from 'react'
import { Card, Col, Modal, ModalBody, Row } from 'reactstrap'
import ButtonComponent from '../../../../components/button/ButtonComponent'
import DropDown from '../../../../components/DropDown/DropDown'
import leftArrow from "../../../../images/leftArrow.svg"
import { FaRegFolderClosed } from "react-icons/fa6";
import { X } from 'react-feather'

const AssignComponent = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} className="modal-lg">
            <div className='d-flex justify-content-between align-items-center p-4 flex-wrap'>
                <div className='d-flex justify-content-between align-items-center gap' >
                    <div className='d-flex justify-content-center align-items-center left-arrow-image' onClick={() => setIsOpen(!isOpen)}>
                        <img src={leftArrow} />
                    </div>
                    <h2>Assign</h2>
                </div>
                <div>
                    <X size={30} color='#C4C4C4' strokeWidth={3.5}/>
                </div>
            </div>
            <ModalBody>
                <Row className='mb-2'>
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
                </Row>
            </ModalBody>

        </Modal>
    )
}

export default AssignComponent