import React from 'react'
import { Card, CardBody, CardTitle } from 'react-bootstrap'
import search from "../../../images/search.svg"
import lang from "../../../images/Lang.svg"
import dashboard from "../../../images/dashboard.svg"
import ButtonComponent from '../../../components/button/ButtonComponent'
import SchoolRequest from './SchoolRequests/SchoolRequest'
import Status from './Status/Status'
import TopSchool from './TopSchools/TopSchool'
import Recent from './Recent/Recent'
import "./home.css"

const Home = () => {
    return (
        <div>
            <Card>
                <CardBody className='d-flex justify-content-between flex-wrap p-3'>
                    <div>
                        <h2 style={{
                            color: "#4D8EFF"
                        }} >Welcome, Noia</h2>
                        <span>Home</span>
                    </div>
                    <div className='d-flex align-items-center gap'>
                        <div className='d-flex align-items-center home-input-section'>
                            < img src={search} />
                            <input type='text' placeholder='Search' />
                        </div>
                        <ButtonComponent buttonType={"secondary"} title={"Take a tour"} />
                        <div >
                            <img src={lang} />
                        </div>
                        <div>
                            <img src={dashboard} />
                        </div>
                    </div>
                </CardBody>

            </Card>
            <div className='mt-4 d-flex gap  flex-wrap'>
               <div style={{flex:1}}>
               <SchoolRequest />
                <Status />
               </div>
               <div style={{flex:1}}>
                 <TopSchool />
                 <Recent />
               </div>
            </div>
        </div>
    )
}

export default Home