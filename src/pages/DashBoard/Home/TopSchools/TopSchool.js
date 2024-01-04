import React from 'react'
import { Card } from 'react-bootstrap'
import schoolLogo from '../../../../images/schoolLogo.svg'
import "./topschool.css"


const TopSchool = () => {

    const schoolLogos = [
        {}, {}, {}, {}
    ]

    return(
    <Card className='p-4'>
        <div className='d-flex align-items-center justify-content-around gap top-school-section' style={{ color: "#838383" }}>
            <p>Top Schools</p>
            <div className='d-flex'>
                {
                    schoolLogos.map((element, idx) => {
                        return (
                            <div className='mx-2' key={idx}>
                                <img src={schoolLogo} alt={`School Logo ${idx + 1}`} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </Card>
  )

}
export default TopSchool