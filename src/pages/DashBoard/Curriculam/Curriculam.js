import React from 'react'
import { Card } from 'react-bootstrap'
import leftArrow from "../../../images/leftArrow.svg"
import ButtonComponent from '../../../components/button/ButtonComponent'
import "./curriculam.css"

const Curriculam = () => {
  return (
    <div>
      <Card  >
        <div className='d-flex justify-content-between align-items-center p-4 flex-wrap'>

          <div className='d-flex justify-content-between align-items-center gap' >
            <div className='d-flex justify-content-center align-items-center left-arrow-image'>
              <img src={leftArrow} />
            </div>
            <h2>Curriculam</h2>
          </div>
          <div className='d-flex justify-content-center align-items-center gap'>
            <ButtonComponent buttonType={'secondary'} title={'Take A Tour'} />
            <ButtonComponent buttonType={'primary'} title={'Add New'} />
          </div>

        </div>
      </Card>
    </div>
  )
}

export default Curriculam