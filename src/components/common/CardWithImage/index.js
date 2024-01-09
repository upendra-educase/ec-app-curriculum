import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
import cross from "../../../images/+.svg"

const CardWithImage = () => {
    return (
        <Card
            style={{
                width: '350px',
                height: '240px',
                borderRadius: "20px",
                // boxShadow: "0px 0px 5px 0px #001B4A33",
                // padding:'1rem'
                border: "1px solid #C4C4C4",
                backgroundColor: 'aliceblue  ',
                overflow: 'hidden'

            }}
        >
            <div style={{ height: '70%', position: 'relative' }}>
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                    style={{ height: '100%', width: '100%', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                />
                <div style={{ position: "absolute", top: '15px', right: '15px', height: "29px", width: '29px', borderRadius: "100%", backgroundColor: "#FFFFFF",cursor:'pointer' }} className='d-flex justify-content-center align-items-center'>
                    <img src={cross} />
                </div>
            </div>

            <CardBody className='d-flex align-items-center'>
                <CardText className='d-flex align-items-center  px-2'>
                    History.pdf
                </CardText>

            </CardBody>
        </Card>
    )
}

export default CardWithImage