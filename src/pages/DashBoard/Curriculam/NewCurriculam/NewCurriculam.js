import React from 'react'
import leftArrow from "../../../../images/leftArrow.svg"
import ButtonComponent from '../../../../components/button/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const NewCurriculam = () => {
  
    const navigation = useNavigate()

    return (
        <div>
            <div className='d-flex align-items-center gap justify-content-between p-2 mx-2' >
                <div className='d-flex .align-items-center gap'>
                    <div onClick={e =>  navigation(-1) } style={{cursor:"pointer"}} >
                        <img src={leftArrow} />
                    </div>
                    <h2>
                        New Curriculum
                    </h2>
                </div>
                <ButtonComponent buttonType={'secondary'}  title={'Take A Tour'} />
            </div>


            <Card>  
                <div>
                    
                </div>


                <div></div>
            </Card>
        </div>
    )
}

export default NewCurriculam