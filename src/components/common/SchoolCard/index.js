import React from 'react'
import './index.css'
import { Card } from 'react-bootstrap'
import file from "../../../images/file.svg"
import cardBoard from "../../../images/cardBoard.svg"

const SchoolCard = () => {
    return (
        <Card style={{
            width: "450px",
            height: "240px"

        }}>
            <div>
                <div className='d-flex justify-content-between p-3' style={{ borderBottom: "1px solid #DEDEDE" }}>
                    <div className='d-flex gap'>
                        <div style={{ backgroundColor: "#4D8EFF", borderRadius: "10px" }} className='d-flex justify-content-center align-items-center p-1'><img src={file} /></div>
                        <div className='d-flex flex-column align-items-center'>
                            <span style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                lineHeight: "20px",
                            }}>Community Helpers</span>
                            <span style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "#999999"

                            }}>Teachers</span>
                        </div>
                    </div>
                    <div>Togggle</div>
                </div>
                <div className='school-card-section-2 p-3 d-flex justify-content-between align-items-center' style={{ borderBottom: "1px solid #DEDEDE" }}>
                    <div>
                        <p>Duration:<span>2 Months</span> </p>
                        <p>Grade: <span>5</span> </p>
                    </div>
                    <div>
                        <img src={cardBoard}  />
                    </div>
                </div>
                <div></div>
            </div>
        </Card>
    )
}

export default SchoolCard