import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import leftArrow from "../../../images/leftArrow.svg"
import ButtonComponent from '../../../components/button/ButtonComponent'
import "./curriculum.css"
import NewCurriculum from './NewCurriculum/NewCurriculum'

const Curriculum = () => {

  const [curriculumState, setCurriculumState] = useState('Curriculum')

  return (
    <div>
      {
        curriculumState === 'Curriculum' ? <Card  >
          <div className='d-flex justify-content-between align-items-center p-4 flex-wrap'>

            <div className='d-flex justify-content-between align-items-center gap' >
              <div className='d-flex justify-content-center align-items-center left-arrow-image'>
                <img src={leftArrow} />
              </div>
              <h2>Curriculum</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center gap'>
              <ButtonComponent buttonType={'secondary'} title={'Take A Tour'} />
              <ButtonComponent buttonType={'primary'} title={'Add New'} onClick={e => setCurriculumState('NewCurriculam')} />
            </div>

          </div>
        </Card> :
          <NewCurriculum />
      }
    </div>
  )
}

export default Curriculum