import React from 'react'
import { Card } from 'react-bootstrap'
import file from "../../../../images/file.svg"  
import './recent.css'
import ButtonComponent from '../../../../components/button/ButtonComponent'
const Recent = () => {

  
const schoolDetailsSubject = [
  {
    name:"English Compositions",
    time:"4 Min Before"
  },
  {
    name:"Statistics",
    time:"2 Days Before"
  },
  {
    name:"Hindi Poems",
    time:"4 Months Before"
  },
  {
    name:"EVS Mock Papers",
    time:"1 Yr Before"
  },
  
]

  return (
    <Card className='mt-4 p-4'>
        <p>Recent</p>
        <div className='home-recent-div mt-4'>
            {
            schoolDetailsSubject.map((element,idx) => {
              return(
                <div className='d-flex flex-row  align-content-center gap mb-4' >
                <div className='home-recent-div-image' >
                    <img  src={file} />
                </div>
                <div className='subject-details-recent-section'>
                   <h2>{element.name}</h2>
                   <p>Last Updated: <span>{element.time}</span></p>
                </div>
               <div  className='d-flex flex-fill justify-content-end'>
               <ButtonComponent buttonType={'primary'} title={'Edit'} />
               </div>
            </div>
              )
            })
            
            }
        </div>
    </Card>
  )
}

export default Recent